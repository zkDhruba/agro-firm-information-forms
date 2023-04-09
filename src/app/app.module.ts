import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInformationComponent } from './general-information/general-information.component';

import {HttpClientModule} from '@angular/common/http';
import { ProductionInformationComponent } from './production-information/production-information.component';
import { IrrigationAndIrrigationSourceComponent } from './irrigation-and-irrigation-source/irrigation-and-irrigation-source.component';
import { InterculturalOperationComponent } from './intercultural-operation/intercultural-operation.component';
import { FertilizerAndFertilizingComponent } from './fertilizer-and-fertilizing/fertilizer-and-fertilizing.component';
import { QuarantineControlMeasureComponent } from './quarantine-control-measure/quarantine-control-measure.component';
import { CropsHarvestingComponent } from './crops-harvesting/crops-harvesting.component';
import { HarvestManagementPackagingComponent } from './harvest-management-packaging/harvest-management-packaging.component';
import { PersonalWorkerHygieneComponent } from './personal-worker-hygiene/personal-worker-hygiene.component';
import { IncomeExpenseComponent } from './income-expense/income-expense.component';


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
    IncomeExpenseComponent
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
