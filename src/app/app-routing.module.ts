import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PersonsComponent} from "./components/persons/persons.component";
import {IncomesComponent} from "./components/incomes/incomes.component";
import {ExpensesComponent} from "./components/expenses/expenses.component";

const routes: Routes = [
  {path: 'user', component: UsersComponent},
  {path: 'perfil', component: PersonsComponent},
  {path: 'income', component: IncomesComponent},
  {path: 'expense', component: ExpensesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
