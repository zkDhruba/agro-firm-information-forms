import { Component } from '@angular/core';
import { IrrigationSourceService } from '../services/irrigation-source.service';

@Component({
  selector: 'app-irrigation-and-irrigation-source',
  templateUrl: './irrigation-and-irrigation-source.component.html',
  styleUrls: ['./irrigation-and-irrigation-source.component.css']
})
export class IrrigationAndIrrigationSourceComponent {

  irrigationData: any;

  constructor(private irrigationSourceData: IrrigationSourceService){
    this.getIrrigationData;
  }

  getIrrigationData(){
    this.irrigationSourceData.getIISData()
      .subscribe((data)=>{
        this.irrigationData = data;
        console.log(data);
        
      })
  }

  checkedIrrigationWaterSource:any = {
    River: false,
    Pond: false,
    TubeWell: false,
    Municipality: false,
    DeepTubeWell: false,
    RainWater: false
  };

  isOtherMethodDisabled = true;
  DisableOtherMethod(event: Event){
    const value = (event.target as HTMLInputElement).value;
    
    this.isOtherMethodDisabled = value === 'disable';
  }
  EnableOtherMethod(event: Event){
    this.isOtherMethodDisabled = true;
  }

  submitted = false;

  onSubmitIrrigationSource(IISData:any){
    this.submitted = true;

    if (IISData.otherMethod){
      IISData.irrigationMethod = IISData.otherMethod;
    }

    const checkedIrrigationWaterSourceOptions = Object.keys(this.checkedIrrigationWaterSource)
    .filter(key => this.checkedIrrigationWaterSource[key]);


    let IISAllData:any = {
      waterSource: checkedIrrigationWaterSourceOptions,
      pollutionFree: IISData.pollutionFree,
      testedSource: IISData.testedSource,
      infected: IISData.infected,
      isPurifined: IISData.isPurifined,
      purifyingAgent: IISData.purifyingAgent,
      localName: IISData.localName,
      sourceType: IISData.sourceType,
      badEffectHuman: IISData.badEffectHuman,
      isHeavyMetalPresent: IISData.isHeavyMetalPresent,
      irrigationSameTime: IISData.irrigationSameTime,
      differentIrrigationTime: IISData.differentIrrigationTime,
      irrigation1: IISData.irrigation1,
      irrigation2: IISData.irrigation2,
      irrigation3: IISData.irrigation3,
      irrigation4: IISData.irrigation4,
      irrigation5: IISData.irrigation5,
      totalIrrigation: IISData.totalIrrigation,
      animalRoaming: IISData.animalRoaming,
      industryNearBy: IISData.industryNearBy,
      sewageWaterUsed: IISData.sewageWaterUsed,
      tankDisinfection: IISData.tankDisinfection,
      takenCooperation: IISData.takenCooperation,
      arrigationTime: IISData.arrigationTime,
      suggestionTaken: IISData.suggestionTaken,
      irrigationMethod: IISData.irrigationMethod,
      poperDrainage: IISData.poperDrainage,
      excessWaterDrainage: IISData.excessWaterDrainage,
      generalInformationID: ''

    }

    console.log(IISAllData);
    this.irrigationSourceData.addIISData(IISAllData)
      .subscribe((result)=>{
        console.warn(result);
      })
    
    
    
  }

}
