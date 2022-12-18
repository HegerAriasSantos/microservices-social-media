import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginUseCase } from '@domain/user/usecases/user-login.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginUseCase: UserLoginUseCase
  ) {}
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {}

  onSubmit() {
    const { username, password } = this.form.value;
    if (this.form.invalid || !username || !password) return;

    this.loginUseCase
      .execute({
        username,
        password,
      })
      .subscribe((res) => console.log);
  }
}
