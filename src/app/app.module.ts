import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PersonsComponent } from './components/persons/persons.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DatatablesComponent } from './components/components/datatables/datatables.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './components/persons/profile/profile.component';
import { PersonFormComponent } from './components/persons/person-form/person-form.component';
import { PageComponent } from './components/page/page.component';
import { IncomeFormComponent } from './components/incomes/income-form/income-form.component';
import { IncomeComponent } from './components/incomes/income/income.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PersonsComponent,
    IncomesComponent,
    ExpensesComponent,
    DatatablesComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    PersonFormComponent,
    PageComponent,
    IncomeFormComponent,
    IncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
