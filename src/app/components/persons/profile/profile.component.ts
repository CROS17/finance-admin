import {Component, OnInit} from '@angular/core';
import {Person} from "../../../interfaces/person";
import {PersonService} from "../../../services/persons/person.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: Person | any;
  id: number;

  constructor(
    private _personService: PersonService,
    private router: Router,
    private aRouter: ActivatedRoute,
  ){

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    console.log("ngOnInit",this.id);
  }

  ngOnInit(){

    if(this.id != 0) {
      this.getPerson(this.id);
    }

  }

  getPerson(id: number){

    this._personService.getPersonById(id).subscribe((data: Person)=> {
      this.profileData = data;
      console.log("perfil",this.profileData);
    })
  }

}
