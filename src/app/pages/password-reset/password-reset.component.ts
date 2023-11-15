import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public hide = true;
  protected resetPasswordForm!: FormGroup;
  public isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const id = params['id'];

      this.resetPasswordForm = this.formBuilder.group({
        token: [token, [Validators.required]],
        id: [id, [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    });
  }

  /**
   * Obtém o valor da senha e atribui ao formulário
   * @param password
   */
  public getPassword(password: string, confirmPassword: string): void {
    this.resetPasswordForm.patchValue({ password: password });
    this.resetPasswordForm.patchValue({ confirmPassword: confirmPassword });
  }

  /**
   * Função responsável por realizar a redefinição de senha com base nos dados fornecidos no formulário e token
   */
  protected async resetPassword(): Promise<void> {
    if (this.resetPasswordForm.valid) {
      try {
        this.isLoading = true;

        const value = await this.userService.resetPassword(this.resetPasswordForm.value);
        const { success } = value;

        const router = success ? '/reset-password-success' : '/reset-password-failure';
        this.router.navigate([router]);
      } catch (error) {
        this.router.navigate(['/reset-password-failure']);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
