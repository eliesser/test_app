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
      this.form.markAllAsTouched();
      return false;
    }

    this.usuario.email = this.form.get('email').value;
    this.usuario.password = this.form.get('password').value;
    this.usuario.remember = this.form.get('remember').value;

    console.log('OK', this.usuario);

    this.form.reset();

    return true;
  }

  campoAccionado(input: AbstractControl): boolean {
    return (input.dirty || input.touched) && input.invalid;
  }
}
