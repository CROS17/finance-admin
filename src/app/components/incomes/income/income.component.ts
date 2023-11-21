import {Component, OnInit} from '@angular/core';
import {IncomeService} from "../../../services/incomes/income.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Income} from "../../../interfaces/income";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit{

  id: number;

  constructor(
    private _incomeService: IncomeService,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getIncomes(this.id);
  }

  getIncomes(id: number){
    this._incomeService.getIncomeById(this.id).subscribe((data: Income)=> {
      console.log("getIncomes",data);
      const dataIncome = [];
    })
  }

}
