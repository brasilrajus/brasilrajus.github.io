import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private snackbarCtrl: MatSnackBar
  ) { }

  ToastSucess(message: string, action: string) {
    this.snackbarCtrl.open(message, action, {
      duration: 2500,
      panelClass: ['toast-sucess']
    });
  };

  ToastError(message: string, action: string) {
    this.snackbarCtrl.open(message, action, {
      duration: 2500,
      panelClass: ['toast-error']
    });
  };
}
