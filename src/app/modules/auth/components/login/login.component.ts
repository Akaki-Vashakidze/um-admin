import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      token: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    localStorage.setItem('x-access-token', this.loginForm.get('token')?.value)
    this._router.navigate(['dashboard'])
  }
}
