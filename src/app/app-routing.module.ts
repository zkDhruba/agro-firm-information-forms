import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInformationComponent } from './pages/general-information/general-information.component';
import { CropsHarvestingComponent } from './pages/crops-harvesting/crops-harvesting.component';
import { FertilizerAndFertilizingComponent } from './pages/fertilizer-and-fertilizing/fertilizer-and-fertilizing.component';
import { HarvestManagementPackagingComponent } from './pages/harvest-management-packaging/harvest-management-packaging.component';
import { IncomeExpenseComponent } from './pages/income-expense/income-expense.component';
import { InterculturalOperationComponent } from './pages/intercultural-operation/intercultural-operation.component';
import { IrrigationAndIrrigationSourceComponent } from './pages/irrigation-and-irrigation-source/irrigation-and-irrigation-source.component';
import { PersonalWorkerHygieneComponent } from './pages/personal-worker-hygiene/personal-worker-hygiene.component';
import { ProductionInformationComponent } from './pages/production-information/production-information.component';
import { QuarantineControlMeasureComponent } from './pages/quarantine-control-measure/quarantine-control-measure.component';

const appRoute:Routes = [
  {path:'', redirectTo:'general-info', pathMatch:'full'},
  {path:'general-info', component: GeneralInformationComponent},
  {path:'production-info', component: ProductionInformationComponent},
  {path:'irrigation-source', component: IrrigationAndIrrigationSourceComponent},
  {path:'intercultural-operation', component: InterculturalOperationComponent},
  {path:'fertilizer', component: FertilizerAndFertilizingComponent},
  {path:'quarantine', component: QuarantineControlMeasureComponent},
  {path:'crops-harvesting', component: CropsHarvestingComponent},
  {path:'harvest-management', component: HarvestManagementPackagingComponent},
  {path:'hygiene', component: PersonalWorkerHygieneComponent},
  {path:'income-expenditure', component: IncomeExpenseComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
