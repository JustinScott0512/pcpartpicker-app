import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: "",
    password: ""
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
