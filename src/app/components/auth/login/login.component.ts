import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/users/user.service";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit() {}

  login(){
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this._userService.login(user).subscribe((res) => {
      console.log("rpta",res);
    })
  }

  logout(){
    this._userService.logout().subscribe((res)=>{
      console.log("rpta",res);
    })
  }

}
