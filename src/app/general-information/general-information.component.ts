import { Component } from '@angular/core';
import { GeneralInfoDataService } from '../services/general-info-data.service';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})

export class GeneralInformationComponent {

  generalData:any;

  constructor(private generalInfoData: GeneralInfoDataService){
    this.getData();
  }
  getData(){
    this.generalInfoData.getGIData().subscribe((data)=>{
      this.generalData = data;
      console.log(data);
      
    })
  }

  checkedVegetables:any = {
    Brinjal: false,
    Bean: false,
    SnakeGourd: false,
    BitterGourd: false,
    SpineGourd: false,
    PointedGourd: false,
    Cabbage: false,
    BetelLeaf: false,
    Mango: false,
  };

  checkedWaterSource:any = {
    River: false,
    Pond: false,
    Rain: false,
    Ground: false
  };

  submitted = false;

  onSubmit(GIData:any) { 
    this.submitted = true;

    const checkedVegetableOptions = Object.keys(this.checkedVegetables)
    .filter(key => this.checkedVegetables[key]);
    const checkedWaterSourceOptions = Object.keys(this.checkedWaterSource)
    .filter(key => this.checkedWaterSource[key]);
    
    
    let framLocationAndCode:any = {
      groupCodeNo: GIData.groupCodeNo,
      farmCode: GIData.farmCode,
      mouja: GIData.mouja,
      village: GIData.village,
      union: GIData.union,
      upzilla: GIData.upzilla,
      district: GIData.district

    }
    let farmingSystem:any = {
      system: GIData.system,
      totalFarmers: GIData.totalFarmers,
      leaderName: GIData.leaderName,
      groupTotalLand: GIData.groupTotalLand

    }
    let FarmerInformation:any = {
      farmerName: GIData.farmerName,
      framProfileCode: GIData.framProfileCode,
      farmerVillage: GIData.farmerVillage,
      farmerUpzilla: GIData.farmerUpzilla,
      farmerUnion: GIData.farmerUnion,
      farmerDistrict: GIData.farmerDistrict

    }
    let farmerType:any = {
      type: GIData.type,
      ownedLand: GIData.ownedLand,
      lease: GIData.lease,
      totalLand: GIData.totalLand

    }
    let siteSelection:any = {
      info1: GIData.info1,
      info2: GIData.info2,
      info3: GIData.info3,
      info4: GIData.info4,
      info5: GIData.info5,
      info6: GIData.info6,
      info7: GIData.info7,
      info8: GIData.info8,
      sourceOfWater: checkedWaterSourceOptions,
      info9: GIData.info9

    }
    let contratedLandCropInfo:any = {
      cantractLand: GIData.cantractLand,
      productionMethod: GIData.productionMethod,
      vegetables: checkedVegetableOptions

    }
    let soilType:any = {
      soilName: GIData.soilName,
      soilPH: GIData.soilPH,
      croppedType: GIData.croppedType,
      previousCrop: GIData.previousCrop,
      cultivationType: GIData.cultivationType,
      AEZ: GIData.AEZ

    }

    let GIAllData: Object = {
      framLocationAndCode,
      farmingSystem,
      FarmerInformation,
      farmerType,
      siteSelection,
      contratedLandCropInfo,
      soilType
    }
    console.log(GIAllData);
    this.generalInfoData.addGIData(GIAllData).subscribe((result)=>{
      console.warn(result);
      
    })
    
    
    
  }
}
