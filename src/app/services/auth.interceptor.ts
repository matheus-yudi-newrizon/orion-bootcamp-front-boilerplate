import { TokenService } from 'src/app/services/token/token.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.get()}`);
    request = request.clone({ headers });

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && !request.url.includes('login') && error.status === 401) {
          if (this.tokenService.getRememberMe()) {
            return this.handleUnauthorized(request, next);
          }

          this.tokenService.logout();
        }

        return throwError(() => error);
      })
    );
  }

  private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return from(this.userService.refreshToken()).pipe(
        switchMap(({ data: token }) => {
          this.tokenService.save(token);
          this.isRefreshing = false;

          request = request.clone({
            headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
          });

          return next.handle(request);
        }),
        catchError(error => {
          this.isRefreshing = false;
          this.tokenService.logout();

          return throwError(() => error);
        })
      );
    }

    return next.handle(request);
  }
}
