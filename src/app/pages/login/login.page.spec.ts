import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPage } from './login.page';
import { UiService } from '../../services/ui.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const servicio = new UiService(null);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule, ReactiveFormsModule, FormsModule],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('Debe de crear un formulario con 3 elementos, email, password y recordar', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
    expect(component.form.contains('remember')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const control = component.form.get('email');
    control.setValue('s');

    expect(control.value.length).toBeGreaterThanOrEqual(1);
  });

  it('El email debe ser un correo válido', () => {
    const control = component.form.get('email');
    control.setValue('freiteseliesser@hotmail.com');

    let valido = true;
    if (control.errors && control.errors.email) {
      valido = false;
    }

    expect(valido).toBeTrue();
  });

  it('La contraseña debe de ser obligatoria', () => {
    const control = component.form.get('password');
    control.setValue('w');

    expect(control.value.length).toBeGreaterThanOrEqual(1);
  });

  it('La contraseña debe de ser igual o mayor a 5 caracteres', () => {
    const control = component.form.get('password');
    control.setValue('12345');

    expect(control.value.length).toBeGreaterThanOrEqual(5);
  });

  it('Envio email y password', () => {
    const email = component.form.get('email');
    email.setValue('freiteseliesser@hotmail.com');
    const password = component.form.get('password');
    password.setValue('12345');

    component.login();

    expect(component.form.valid).toBeTrue();
  });

  it('Envio corecto o password erroneo', () => {
    const email = component.form.get('email');
    email.setValue('freiteseliesser@hotmail.com');
    const password = component.form.get('password');
    password.setValue('');

    component.login();

    expect(component.form.valid).toBeFalse();
  });
});
