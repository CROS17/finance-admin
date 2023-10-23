import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.userForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit() {}


  addUser(){
    console.log(this.userForm.value);

    const user: User = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }

    if(this.id != 0){
      /*edit*/
      console.log("editar");
    }else{
      /*add*/
      this._userService.saveUser(user).subscribe(()=>{
        //this.router.navigate(['user'])
      })
    }
  }
}
