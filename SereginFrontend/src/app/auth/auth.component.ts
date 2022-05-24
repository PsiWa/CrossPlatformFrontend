import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email = ""
  password = ""
  test: string | null = ""
  constructor(private _authservice: AuthService) { }

  Login() {
    this.test = this._authservice.login(this.email, this.password)
    console.log(this.test);
  }

  ngOnInit(): void {
  }

}
