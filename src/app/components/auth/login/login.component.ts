import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/users/user.service";
import {User} from "../../../interfaces/user";
// Swwetalert2
import Swal from 'sweetalert2'

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

    this._userService.login(user).subscribe((res: any) => {
      console.log("rpta", res);
      if(res.message == 'success'){
        Swal.fire({
          icon: 'success',
          text: 'Bienvenido!'
        })
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Las credenciales no son correctas'
        })
      }
    })
  }

  logout(){
    this._userService.logout().subscribe((res)=>{
      console.log("rpta",res);

        Swal.fire({
          icon: 'success',
          text: 'Gracias por su visita!'
        })

    })
  }

}
