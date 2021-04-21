import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(private toastController: ToastController) {}

  async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }
}
