import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../services/persons/person.service";
import {Person} from "../../interfaces/person";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  personForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private _personService: PersonService,
    private router: Router,
    private aRouter: ActivatedRoute,
  ){
    this.personForm = fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      total_income: ['', [Validators.required]],
      total_expense: ['', [Validators.required]],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(){
    console.log("hola", this.id);
    if(this.id != 0){
      this.getPerson(this.id);
    }
  }

  getPerson(id: number){
    console.log("getPerson",this.personForm);
    this._personService.getPersonById(id).subscribe((data: Person)=> {
        this.personForm.setValue({
          name: data.name,
          last_name: data.last_name,
          total_income: data.total_income,
          total_expense: data.total_expense
        })
    })
  }

  addPerson(){
    console.log("addPerson",this.personForm.value);

    const person: Person = {
      name: this.personForm.value.name,
      last_name: this.personForm.value.last_name,
      total_income: this.personForm.value.total_income,
      total_expense: this.personForm.value.total_expense
    }

    if(this.id != 0){
      /*edit*/
      console.log("editar");
    }else{
      /*add*/
      console.log("guardar",person );
      this._personService.savePerson(person).subscribe((res: any)=>{
        console.log("rpta",res);
        const newPersonId = res.id;
      })
    }
  }
}
