import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { Usuario } from 'src/app/interfaces/interfaces';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario = {};

  form: FormGroup;

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get remember(): AbstractControl {
    return this.form.get('remember');
  }

  constructor(private fb: FormBuilder, private uiService: UiService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      remember: [false],
    });
  }

  login(): boolean {
    if (!this.form.valid) {
      this.validarCampo();
      return false;
    }

    this.usuario.email = this.email.value;
    this.usuario.password = this.password.value;
    this.usuario.remember = this.remember.value;

    console.log('OK', this.usuario);

    this.form.reset();

    return true;
  }

  validarCampo() {
    for (const key in this.form.controls) {
      if (Object.prototype.hasOwnProperty.call(this.form.controls, key)) {
        const element = this.form.controls[key];
        if (element.errors) {
          element.markAllAsTouched();
          for (const error in element.errors) {
            if (Object.prototype.hasOwnProperty.call(element.errors, error)) {
              const valor = element.errors[error];
              switch (error) {
                case 'required':
                  this.uiService.presentToast(`Debe ingresar el ${key}`);
                  break;
                case 'email':
                  this.uiService.presentToast(`Debe ingresar un ${key} válido`);
                  break;
                case 'minlength':
                  this.uiService.presentToast(
                    `El ${key} debe tener minimo ${valor.requiredLength} caracteres`
                  );
                  break;
              }
            }
          }
          break;
        }
      }
    }
  }

  campoAccionado(input: AbstractControl): boolean {
    return (input.dirty || input.touched) && input.invalid;
  }
}
