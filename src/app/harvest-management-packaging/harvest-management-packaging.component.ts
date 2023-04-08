import { Component } from '@angular/core';

@Component({
  selector: 'app-harvest-management-packaging',
  templateUrl: './harvest-management-packaging.component.html',
  styleUrls: ['./harvest-management-packaging.component.css']
})
export class HarvestManagementPackagingComponent {


  onSubmitCropsHaresting(HMPData: any){
    console.log(HMPData);
  }

}
