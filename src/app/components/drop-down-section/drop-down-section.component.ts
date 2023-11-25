import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenService } from 'src/app/services/token/token.service';
import { LoginResponse, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-drop-down-section',
  templateUrl: './drop-down-section.component.html',
  styleUrls: ['./drop-down-section.component.scss']
})
export class DropDownSectionComponent {
  protected reviewId = '';
  protected answer = '';

  public guessTitle = new FormControl('');
  public options: string[] = [];
  public gameData!: LoginResponse['data']['game'] | null;
  public lives: boolean[] = [false, false, false, false, false];

  @Output() public guessTitleChanged = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.guessTitle.valueChanges.subscribe(value => {
      if ((value || '').length >= 4) {
        this.uploadMovies(value || '');
      }
    });

    this.gameData = this.tokenService.getGameData();
    this.lives = this.fillBooleanArray(this.gameData!.lives);
  }

  public fillBooleanArray(num: number): boolean[] {
    const result: boolean[] = [];

    if (num >= 0 && num <= 5) {
      for (let i = 0; i < 5; i++) {
        result[i] = i < num;
      }
    }

    return result;
  }

  public async uploadMovies(title: string): Promise<void> {
    const token = this.tokenService.get();

    if (!token) {
      return;
    }

    try {
      const response = await this.userService.uploadMovies({ title, token });
      this.options = response.data.map(value => {
        return value.title;
      });
    } catch (error) {
      this.options = [];
    }
  }
}
