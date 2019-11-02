import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.auth.login(this.username, this.password).subscribe(
      resp => {
        this.router.navigate(['admin']);
      }
    );
  }

  get username() { return this.loginForm.get('username').value; }
  get password() { return this.loginForm.get('password').value; }
}
