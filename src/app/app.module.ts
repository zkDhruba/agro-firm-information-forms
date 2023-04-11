import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInformationComponent } from './pages/general-information/general-information.component';

import {HttpClientModule} from '@angular/common/http';
import { ProductionInformationComponent } from './pages/production-information/production-information.component';
import { IrrigationAndIrrigationSourceComponent } from './pages/irrigation-and-irrigation-source/irrigation-and-irrigation-source.component';
import { InterculturalOperationComponent } from './pages/intercultural-operation/intercultural-operation.component';
import { FertilizerAndFertilizingComponent } from './pages/fertilizer-and-fertilizing/fertilizer-and-fertilizing.component';
import { QuarantineControlMeasureComponent } from './pages/quarantine-control-measure/quarantine-control-measure.component';
import { CropsHarvestingComponent } from './pages/crops-harvesting/crops-harvesting.component';
import { HarvestManagementPackagingComponent } from './pages/harvest-management-packaging/harvest-management-packaging.component';
import { PersonalWorkerHygieneComponent } from './pages/personal-worker-hygiene/personal-worker-hygiene.component';
import { IncomeExpenseComponent } from './pages/income-expense/income-expense.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralInformationComponent,
    ProductionInformationComponent,
    IrrigationAndIrrigationSourceComponent,
    InterculturalOperationComponent,
    FertilizerAndFertilizingComponent,
    QuarantineControlMeasureComponent,
    CropsHarvestingComponent,
    HarvestManagementPackagingComponent,
    PersonalWorkerHygieneComponent,
    IncomeExpenseComponent,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
