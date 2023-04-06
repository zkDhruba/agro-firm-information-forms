import { Component } from '@angular/core';
import { CropsHarvestingDataService } from '../services/crops-harvesting-data.service';

@Component({
  selector: 'app-crops-harvesting',
  templateUrl: './crops-harvesting.component.html',
  styleUrls: ['./crops-harvesting.component.css']
})
export class CropsHarvestingComponent {
  
  cropsHarvesting: any;

  constructor (private cropsHarvestingData: CropsHarvestingDataService) {
    this.getCropsHavestingData;
  }

  getCropsHavestingData () {
    this.cropsHarvestingData.getCHData()
      .subscribe((data)=>{
        this.cropsHarvesting = data;
        console.log(data);
        
      })
  }

  onSubmitCropsHaresting(CHData:any){

    let fieldSanitation: object = {
      isFollowingStepTaken: CHData.isFollowingStepTaken,
      isIdentificationSource: CHData.isIdentificationSource,
      isPoperSanitation: CHData.isPoperSanitation,
      isToiletFacility: CHData.isToiletFacility
    }

    let harvestField: object = {
      isMRLtest: CHData.isMRLtest,
      insecticideLevel: CHData.insecticideLevel,
      maturityIndexUsed: CHData.maturityIndexUsed,
      isContainerHygienic: CHData.isContainerHygienic,
      cropHarvestedTime: CHData.cropHarvestedTime,
      materials: CHData.materials,
      inContainerOnSoilLevel: CHData.inContainerOnSoilLevel,
      DAEliaison: CHData.DAEliaison,
      primarilyStord: CHData.primarilyStord,
      primaryGrading: CHData.primaryGrading,
      isGlovesApronUsed: CHData.isGlovesApronUsed
    }

    let vegetables: object = {
      isKnifeUsed: CHData.isKnifeUsed,
      isHygienicToolUsed: CHData.isHygienicToolUsed,
      isInjuryProtection: CHData.isInjuryProtection
    }

    let mango: object = {
      isToolsUsed: CHData.isToolsUsed,
      isLatexSecrete: CHData.isLatexSecrete,
      isArrangedInContainer: CHData.isArrangedInContainer,
      isKeepSeparately: CHData.isKeepSeparately
    }

    let betelLeaf: object = {
      isMaximumHygienic: CHData.isMaximumHygienic,
      isBacteriaFree: CHData.isBacteriaFree,
      isDirectlyPut: CHData.isDirectlyPut,
      isDistilledWaterApplied: CHData.isDistilledWaterApplied,
      isCautionTaken: CHData.isCautionTaken
    }

    let localCollectionCenter: object = {
      isLocalCollectionCenter: CHData.isLocalCollectionCenter,
      isCropBroughtLCC: CHData.isCropBroughtLCC,
      isPreCoolingSystem: CHData.isPreCoolingSystem,
      isHygienicTransporting: CHData.isHygienicTransporting,
      transportation: CHData.transportation,
      isSeconddaryGrading: CHData.isSeconddaryGrading,
      isAirConditioned: CHData.isAirConditioned,
      hour: CHData.hour,
      minutes: CHData.minutes
    }

    let CHAllData:( string | object ) = {
      generalInformationID: "642e5473205d903eaf7a5f7e",
      fieldSanitation,
      harvestField,
      vegetables,
      mango,
      betelLeaf,
      localCollectionCenter
    }

    console.log(CHData);
    console.log(CHAllData);

    this.cropsHarvestingData.addCHData(CHAllData)
      .subscribe((result)=>{
        console.warn(result);
        
      })
    
  }

}
