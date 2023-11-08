import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalForgotPasswordComponent } from 'src/app/components/modal-forgot-password/modal-forgot-password.component';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete = false;

  constructor(public dialog: MatDialog) { }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  openModalForgot(): void {
    const dialogRef = this.dialog.open(ModalForgotPasswordComponent, {
      width: '500px',
      height: '100%',
      panelClass: 'custom__modal__forgotpassword',
      disableClose: false,
      position: {
        right: '0'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
