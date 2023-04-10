import { Component } from '@angular/core';
import { HttpService } from '../../shared/services/http.service'

@Component({
  selector: 'app-production-information',
  templateUrl: './production-information.component.html',
  styleUrls: ['./production-information.component.css']
})
export class ProductionInformationComponent {

  productionData:any

  constructor (private productionInfoData: HttpService){
    this.getProData;
  }

  getProData(){
    this.productionInfoData.getPIData().subscribe((data)=>{
      this.productionData = data;
      console.log(data);
      
    })
    
  }

  isCompanyDisabled = true;
  isFungcideDisabled = true;
  EnableCompanyName(event: Event){
    const value = (event.target as HTMLInputElement).value;
    
    this.isCompanyDisabled = value === 'disable';
  }
  DisableCompanyName(event: Event){
    this.isCompanyDisabled = true;
  }

  EnableFungcideName(event: Event){
    const value = (event.target as HTMLInputElement).value;
    
    this.isFungcideDisabled = value === 'disable';
  }
  DisableFungcideName(event: Event){
    this.isFungcideDisabled = true;
  }
  submitted = false;
  onSubmitProductionInfo(PIData:any){
    this.submitted = true;

    if (PIData.companyName){
      PIData.seedSource = PIData.companyName;
    }


    let cropInformation:any = {
      varietyName: PIData.varietyName,
      varietyType: PIData.varietyType,
      usedInGourpLand: PIData.usedInGourpLand

    }

    let raisingOfSeedlings:any = {
      raising: PIData.raising,
      seedsWereRaised: PIData.seedsWereRaised,
      isCowdungUsed: PIData.isCowdungUsed,
      cowdungAmount: PIData.cowdungAmount,
      isVarmiCompostUsed: PIData.isVarmiCompostUsed,
      varmiCompostAmount: PIData.varmiCompostAmount,
      isCocodustUsed: PIData.isCocodustUsed,
      cocodustAmount: PIData.cocodustAmount,
      isBiofertilizerUsed: PIData.isBiofertilizerUsed,
      biofertilizerAmount: PIData.biofertilizerAmount,
      isOtherUsed: PIData.isOtherUsed,
      otherAmount: PIData.otherAmount,
      insectPathogenSymptoms: PIData.insectPathogenSymptoms,
      seedlingAge: PIData.seedlingAge


    }


    let landPreparation:any = {
      plough: PIData.plough,
      isGroupPreapared: PIData.isGroupPreapared

    }

    let showingTransplanting:any = {
      seedSource: PIData.seedSource,
      seedTreatment: PIData.seedTreatment,
      fungicideName: PIData.fungicideName,
      sowingType: PIData.sowingType,
      plantDistance: PIData.plantDistance,
      rowDistance: PIData.rowDistance,
      gardenAge: PIData.gardenAge,
      plantedInGroup: PIData.plantedInGroup,
      dayDifference: PIData.dayDifference

    }

    let selectionCropWeeding:any = {
      cropName: PIData.cropName,
      isWeedingPoperTime: PIData.isWeedingPoperTime,
      firstWeedingDate: PIData.firstWeedingDate,
      sceondWeedingDate: PIData.sceondWeedingDate,
      thirdWeedingDate: PIData.thirdWeedingDate,
      nextWeedingDate: PIData.nextWeedingDate

    }

    let PIAllData: Object = {
      cropInformation,
      raisingOfSeedlings,
      landPreparation,
      showingTransplanting,
      selectionCropWeeding
    }
    

    console.log(PIAllData);
    this.productionInfoData.addPIData(PIAllData).subscribe((result)=>{
      console.warn(result);
      
    })
  }
}
