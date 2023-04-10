import { Component } from '@angular/core';
import { HttpService } from '../../shared/services/http.service'

@Component({
  selector: 'app-personal-worker-hygiene',
  templateUrl: './personal-worker-hygiene.component.html',
  styleUrls: ['./personal-worker-hygiene.component.css']
})
export class PersonalWorkerHygieneComponent {

  personalAndWorkerHygiene: any;
  constructor (private personalAndWorkerHygieneData: HttpService) {}

  getHygieneData(){
    this.personalAndWorkerHygieneData.getPWHData()
      .subscribe((data)=>{
        this.personalAndWorkerHygiene = data;
        console.log(data);
      })
  }

  onSubmitPersonalAndWorkerHygiene(PWH: any){

    let fram:object = {
      isRestHouse: PWH.isRestHouse,
      isToilet: PWH.isToilet,
      isDistilledWater: PWH.isDistilledWater,
      isSoap: PWH.isSoap,
      isMaterialRoom: PWH.isMaterialRoom,
      isRoamingFree: PWH.isRoamingFree,
      isHygieneProduct: PWH.isHygieneProduct,
      isMonitoring: PWH.isMonitoring,
      isDressingRoom: PWH.isDressingRoom
    }

    let interculteralOperation:object = {
      isHygieneDressUsed: PWH.isHygieneDressUsed,
      isStoredProperly: PWH.isStoredProperly,
      isRefreshed: PWH.isRefreshed,
      isCleaned: PWH.isCleaned,
      pesticideApplied: PWH.pesticideApplied,
      isRightDirection: PWH.isRightDirection,
      isDAE: PWH.isDAE,
      daysBeforeHarvest: PWH.daysBeforeHarvest,
      isInformationTaken: PWH.isInformationTaken,
      isHandGlovesUsed: PWH.isHandGlovesUsed,
      isHygienic: PWH.isHygienic,
      isPersonalHygiene: PWH.isPersonalHygiene,
      isAllHygiene: PWH.isAllHygiene,
      isAllPrincipleMaintained: PWH.isAllPrincipleMaintained
    }

    let PWHAllData:any = {
      generalInformationID: "642e543b49b5e5cf724c71da",
      fram,
      interculteralOperation

    }

    console.log(PWH);
    console.log(PWHAllData);

    this.personalAndWorkerHygieneData.addPWHData(PWHAllData)
      .subscribe((result)=>{
        console.warn(result);
        
      })
    
    
  }

}

