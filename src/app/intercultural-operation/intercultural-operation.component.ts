import { Component } from '@angular/core';
import { InterculturalOperationDataService } from '../services/intercultural-operation-data.service';

@Component({
  selector: 'app-intercultural-operation',
  templateUrl: './intercultural-operation.component.html',
  styleUrls: ['./intercultural-operation.component.css']
})
export class InterculturalOperationComponent {

  interculturalData:any;
  constructor(private interculturalOperationData:InterculturalOperationDataService){
    this.getInterculturalData;
  }

  getInterculturalData(){
    this.interculturalOperationData.getIOData()
      .subscribe((data)=>{
        this.interculturalData = data;
        console.log(data);
        
      })
  }

  submitted = false;
  onSubmitInterculturalOperation(IOData:any){
    this.submitted = true;

    let weedingIntercultural: any = {
      isCleaned: IOData.isCleaned,
      timelyWeeding: IOData.timelyWeeding,
      primarilyWeeded: IOData.primarilyWeeded,
      productionLevelCleaned: IOData.productionLevelCleaned,
      purifingAgentUsed: IOData.purifingAgentUsed,
      treatedChemicalName: IOData.treatedChemicalName
    }
    let vegetable: any = {
      vegetableCultivation: IOData.vegetableCultivation,
      mulchingPaperUsed: IOData.mulchingPaperUsed,
      supportUsed:IOData.supportUsed,
      lightAndAir: IOData.lightAndAir,
      animalProtection: IOData.animalProtection,
      isEggPlant: IOData.isEggPlant,
      fenceUsed: IOData.fenceUsed,
      wasteManagement: IOData.wasteManagement
    }
    let mango: any = {
      deadStemRemoved: IOData.deadStemRemoved,
      doesClean: IOData.doesClean,
      hormoneUsed: IOData.hormoneUsed,
      mulchingPaperUsedMango:IOData.mulchingPaperUsedMango,
      fenceUsedMango: IOData.fenceUsedMango
    }
    let betelLeaf: any = {
      landShadowNotDamp: IOData.landShadowNotDamp,
      supportUsedBetel: IOData.supportUsedBetel,
      animalProtectionBetel: IOData.animalProtectionBetel,
      prohibitedEntry: IOData.prohibitedEntry
    }

    let IOAllData: any = {
      generalInformationID: "6427a984c7179916780c5de8",
      weedingIntercultural,
      vegetable,
      mango,
      betelLeaf
    }

    this.interculturalOperationData.addIOData(IOAllData)
      .subscribe((result)=>{
        console.warn(result);
        
      })
    console.log(IOAllData);
    
  }

}
