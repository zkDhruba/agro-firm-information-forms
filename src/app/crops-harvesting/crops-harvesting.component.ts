import { Component } from '@angular/core';

@Component({
  selector: 'app-crops-harvesting',
  templateUrl: './crops-harvesting.component.html',
  styleUrls: ['./crops-harvesting.component.css']
})
export class CropsHarvestingComponent {

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
      fieldSanitation,
      harvestField,
      vegetables,
      mango,
      betelLeaf,
      localCollectionCenter
    }
    
    console.log(CHData);
    console.log(CHAllData);
    
    
  }

}
