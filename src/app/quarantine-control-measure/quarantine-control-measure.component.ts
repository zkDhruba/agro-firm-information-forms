import { Component } from '@angular/core';

@Component({
  selector: 'app-quarantine-control-measure',
  templateUrl: './quarantine-control-measure.component.html',
  styleUrls: ['./quarantine-control-measure.component.css']
})
export class QuarantineControlMeasureComponent {

  rowPestNameData = [
    { Pest1: null, Pest2: null, Pest3: null, Pest4: null },
    { Pest1: null, Pest2: null, Pest3: null, Pest4: null },
    { Pest1: null, Pest2: null, Pest3: null, Pest4: null },
  ];

  rowDiseasesNameData = [
    { Diseases1: null, Diseases2: null, Diseases3: null, Diseases4: null },
    { Diseases1: null, Diseases2: null, Diseases3: null, Diseases4: null },
    { Diseases1: null, Diseases2: null, Diseases3: null, Diseases4: null }
  ];

  rowOrganicPesticideName = [
    { OrganicPesticide1: null, OrganicPesticide2: null, OrganicPesticide3: null,
      OrganicPesticide4: null, OrganicPesticide5: null, OrganicPesticide6: null,
      OrganicPesticide7: null, OrganicPesticide8: null, OrganicPesticide9: null },
    { OrganicPesticide1: null, OrganicPesticide2: null, OrganicPesticide3: null,
      OrganicPesticide4: null, OrganicPesticide5: null, OrganicPesticide6: null,
      OrganicPesticide7: null, OrganicPesticide8: null, OrganicPesticide9: null },
    { OrganicPesticide1: null, OrganicPesticide2: null, OrganicPesticide3: null,
      OrganicPesticide4: null, OrganicPesticide5: null, OrganicPesticide6: null,
      OrganicPesticide7: null, OrganicPesticide8: null, OrganicPesticide9: null },
    { OrganicPesticide1: null, OrganicPesticide2: null, OrganicPesticide3: null,
      OrganicPesticide4: null, OrganicPesticide5: null, OrganicPesticide6: null,
      OrganicPesticide7: null, OrganicPesticide8: null, OrganicPesticide9: null }
  ];

  rowChemicalPesticideName = [
    { ChemicalPesticide1: null, ChemicalPesticide2: null, ChemicalPesticide3: null,
      ChemicalPesticide4: null, ChemicalPesticide5: null, ChemicalPesticide6: null,
      ChemicalPesticide7: null, ChemicalPesticide8: null, ChemicalPesticide9: null },
    { ChemicalPesticide1: null, ChemicalPesticide2: null, ChemicalPesticide3: null,
      ChemicalPesticide4: null, ChemicalPesticide5: null, ChemicalPesticide6: null,
      ChemicalPesticide7: null, ChemicalPesticide8: null, ChemicalPesticide9: null },
    { ChemicalPesticide1: null, ChemicalPesticide2: null, ChemicalPesticide3: null,
      ChemicalPesticide4: null, ChemicalPesticide5: null, ChemicalPesticide6: null,
      ChemicalPesticide7: null, ChemicalPesticide8: null, ChemicalPesticide9: null },
    { ChemicalPesticide1: null, ChemicalPesticide2: null, ChemicalPesticide3: null,
      ChemicalPesticide4: null, ChemicalPesticide5: null, ChemicalPesticide6: null,
      ChemicalPesticide7: null, ChemicalPesticide8: null, ChemicalPesticide9: null }
  ];

  
rowFungicidePesticideName = [
  { FungicidePesticide1: null, FungicidePesticide2: null, FungicidePesticide3: null,
    FungicidePesticide4: null, FungicidePesticide5: null, FungicidePesticide6: null,
    FungicidePesticide7: null, FungicidePesticide8: null, FungicidePesticide9: null },
  { FungicidePesticide1: null, FungicidePesticide2: null, FungicidePesticide3: null,
    FungicidePesticide4: null, FungicidePesticide5: null, FungicidePesticide6: null,
    FungicidePesticide7: null, FungicidePesticide8: null, FungicidePesticide9: null },
  { FungicidePesticide1: null, FungicidePesticide2: null, FungicidePesticide3: null,
    FungicidePesticide4: null, FungicidePesticide5: null, FungicidePesticide6: null,
    FungicidePesticide7: null, FungicidePesticide8: null, FungicidePesticide9: null },
  { FungicidePesticide1: null, FungicidePesticide2: null, FungicidePesticide3: null,
    FungicidePesticide4: null, FungicidePesticide5: null, FungicidePesticide6: null,
    FungicidePesticide7: null, FungicidePesticide8: null, FungicidePesticide9: null }
  ];

  tableHeadPesticide = ['ফসল Crop','তারিখ Date', 'নাম Name', 'পরিমান Quantity','তারিখ Date', 'নাম Name', 'পরিমান Quantity','তারিখ Date', 'নাম Name', 'পরিমান Quantity'];

  selectedTechniques: string[] = [];

  checkedTechniques: any = {
    Physical: false,
    Biological: false,
    Chemical: false,
    Mechanical: false,
    BioPesticide: false
  }

  onTechniqueSelectionChange(event:any, technique:string){
    if (event.target.checked) {
      this.selectedTechniques.push(technique);
    } else {
      const index = this.selectedTechniques.indexOf(technique);
      if (index !== -1) {
        this.selectedTechniques.splice(index, 1);
      }
    }
  }


  submitted = false;

  onSubmitQuarantineControlMeasure(QCMData: any){
    this.submitted = true;

    // Quarantine Pests arrays

    let pestsName: any[] = [QCMData.firstPestRow1,QCMData.secondPestRow1,QCMData.thirdPestRow1,QCMData.fourthPestRow1];
    let mangoPestsName: any[] = [QCMData.firstPestRow2,QCMData.secondPestRow2,QCMData.thirdPestRow2,QCMData.fourthPestRow2];
    let betelLeafPestsName: any[] = [QCMData.firstPestRow3,QCMData.secondPestRow3,QCMData.thirdPestRow3,QCMData.fourthPestRow3];
    console.log(pestsName, mangoPestsName, betelLeafPestsName);

    // Quarantine Diseases arrays

    let vegetableDisesesName: any[] =[QCMData.firstDiseasesRow1,QCMData.secondDiseasesRow1,QCMData.thirdDiseasesRow1,QCMData.fourthDiseasesRow1];
    let mangoDisesesName: any[] =[QCMData.firstDiseasesRow2,QCMData.secondDiseasesRow2,QCMData.thirdDiseasesRow2,QCMData.fourthDiseasesRow2];
    let betelLeafDisesesName: any[] =[QCMData.firstDiseasesRow3,QCMData.secondDiseasesRow3,QCMData.thirdDiseasesRow3,QCMData.fourthDiseasesRow3];
    console.log(vegetableDisesesName, mangoDisesesName, betelLeafDisesesName);

    // console.log(this.selectedTechniques);

    // Organic Pesticide

    let vegetableOrganicPesticide: any[] = [
      QCMData.firstOrganicPesticideRow1,QCMData.secondOrganicPesticideRow1,QCMData.thirdOrganicPesticideRow1,
      QCMData.fourthOrganicPesticideRow1,QCMData.fifthOrganicPesticideRow1,QCMData.sixthOrganicPesticideRow1,
      QCMData.seventhOrganicPesticideRow1,QCMData.eighthOrganicPesticideRow1,QCMData.ninthOrganicPesticideRow1,
    ]

    
    let mangoOrganicPesticide: any[] = [
      QCMData.firstOrganicPesticideRow2,QCMData.secondOrganicPesticideRow2,QCMData.thirdOrganicPesticideRow2,
      QCMData.fourthOrganicPesticideRow2,QCMData.fifthOrganicPesticideRow2,QCMData.sixthOrganicPesticideRow2,
      QCMData.seventhOrganicPesticideRow2,QCMData.eighthOrganicPesticideRow2,QCMData.ninthOrganicPesticideRow2
    ]

    let betelLeafOrganicPesticide: any[] = [
      QCMData.firstOrganicPesticideRow3,QCMData.secondOrganicPesticideRow3,QCMData.thirdOrganicPesticideRow3,
      QCMData.fourthOrganicPesticideRow3,QCMData.fifthOrganicPesticideRow3,QCMData.sixthOrganicPesticideRow3,
      QCMData.seventhOrganicPesticideRow3,QCMData.eighthOrganicPesticideRow3,QCMData.ninthOrganicPesticideRow3
    ]

    let otherOrganicPesticde: any[] = [
      QCMData.firstOrganicPesticideRow4,QCMData.secondOrganicPesticideRow4,QCMData.thirdOrganicPesticideRow4,
      QCMData.fourthOrganicPesticideRow4,QCMData.fifthOrganicPesticideRow4,QCMData.sixthOrganicPesticideRow4,
      QCMData.seventhOrganicPesticideRow4,QCMData.eighthOrganicPesticideRow4,QCMData.ninthOrganicPesticideRow4
    ]
    // console.log(vegetableOrganicPesticide, mangoOrganicPesticide, betelLeafOrganicPesticide, otherOrganicPesticde);

    // Chemical Pesticide

    let vegetableChemicalPesticide: any[] = [
      QCMData.firstChemicalPesticideRow1,QCMData.secondChemicalPesticideRow1,QCMData.thirdChemicalPesticideRow1,
      QCMData.fourthChemicalPesticideRow1,QCMData.fifthChemicalPesticideRow1,QCMData.sixthChemicalPesticideRow1,
      QCMData.seventhChemicalPesticideRow1,QCMData.eighthChemicalPesticideRow1,QCMData.ninthChemicalPesticideRow1,
      ]
      
      
      let mangoChemicalPesticide: any[] = [
      QCMData.firstChemicalPesticideRow2,QCMData.secondChemicalPesticideRow2,QCMData.thirdChemicalPesticideRow2,
      QCMData.fourthChemicalPesticideRow2,QCMData.fifthChemicalPesticideRow2,QCMData.sixthChemicalPesticideRow2,
      QCMData.seventhChemicalPesticideRow2,QCMData.eighthChemicalPesticideRow2,QCMData.ninthChemicalPesticideRow2
      ]
      
      let betelLeafChemicalPesticide: any[] = [
      QCMData.firstChemicalPesticideRow3,QCMData.secondChemicalPesticideRow3,QCMData.thirdChemicalPesticideRow3,
      QCMData.fourthChemicalPesticideRow3,QCMData.fifthChemicalPesticideRow3,QCMData.sixthChemicalPesticideRow3,
      QCMData.seventhChemicalPesticideRow3,QCMData.eighthChemicalPesticideRow3,QCMData.ninthChemicalPesticideRow3
      ]
      
      let otherChemicalPesticide: any[] = [
      QCMData.firstChemicalPesticideRow4,QCMData.secondChemicalPesticideRow4,QCMData.thirdChemicalPesticideRow4,
      QCMData.fourthChemicalPesticideRow4,QCMData.fifthChemicalPesticideRow4,QCMData.sixthChemicalPesticideRow4,
      QCMData.seventhChemicalPesticideRow4,QCMData.eighthChemicalPesticideRow4,QCMData.ninthChemicalPesticideRow4
      ]

      // console.log(vegetableChemicalPesticide, mangoChemicalPesticide, betelLeafChemicalPesticide, otherChemicalPesticide);

      // Fungicide Bactericide

      
let vegetableFungicideBactericide: any[] = [
  QCMData.firstFungicidePesticideRow1,QCMData.secondFungicidePesticideRow1,QCMData.thirdFungicidePesticideRow1,
  QCMData.fourthFungicidePesticideRow1,QCMData.fifthFungicidePesticideRow1,QCMData.sixthFungicidePesticideRow1,
  QCMData.seventhFungicidePesticideRow1,QCMData.eighthFungicidePesticideRow1,QCMData.ninthFungicidePesticideRow1,
  ]
  
  
  let mangoFungicideBactericide: any[] = [
  QCMData.firstFungicidePesticideRow2,QCMData.secondFungicidePesticideRow2,QCMData.thirdFungicidePesticideRow2,
  QCMData.fourthFungicidePesticideRow2,QCMData.fifthFungicidePesticideRow2,QCMData.sixthFungicidePesticideRow2,
  QCMData.seventhFungicidePesticideRow2,QCMData.eighthFungicidePesticideRow2,QCMData.ninthFungicidePesticideRow2
  ]
  
  let betelLeafFungicideBactericide: any[] = [
  QCMData.firstFungicidePesticideRow3,QCMData.secondFungicidePesticideRow3,QCMData.thirdFungicidePesticideRow3,
  QCMData.fourthFungicidePesticideRow3,QCMData.fifthFungicidePesticideRow3,QCMData.sixthFungicidePesticideRow3,
  QCMData.seventhFungicidePesticideRow3,QCMData.eighthFungicidePesticideRow3,QCMData.ninthFungicidePesticideRow3
  ]
  
  let otherFungicideBactericide: any[] = [
  QCMData.firstFungicidePesticideRow4,QCMData.secondFungicidePesticideRow4,QCMData.thirdFungicidePesticideRow4,
  QCMData.fourthFungicidePesticideRow4,QCMData.fifthFungicidePesticideRow4,QCMData.sixthFungicidePesticideRow4,
  QCMData.seventhFungicidePesticideRow4,QCMData.eighthFungicidePesticideRow4,QCMData.ninthFungicidePesticideRow4
  ]

  // console.log(vegetableFungicideBactericide, mangoFungicideBactericide, betelLeafFungicideBactericide, otherFungicideBactericide);
  
  // Structuring Object wise

  let quarantinePestDieases: any = {
    isQuarantinePestDisese: QCMData.isQuarantinePestDisese,
    isPestRiskAnalysis: QCMData.isPestRiskAnalysis,
    pestRiskAnalysis: QCMData.pestRiskAnalysis
  }

  let quarantineNamePests: any = {
    vegetableName: QCMData.vegetableName,
    pestsName: pestsName,
    mangoPestsName: mangoPestsName,
    betelLeafPestsName: betelLeafPestsName
  }

  let quarantinePestDiseseName: any = {
    vegetableDisesesName: vegetableDisesesName,
    mangoDisesesName: mangoDisesesName,
    betelLeafDisesesName: betelLeafDisesesName
  }

  let controlMeasures: any = {
    techniquesName: this.selectedTechniques,
    isIntegration: QCMData.isIntegration,
    isIntegrationTwoThree: QCMData.isIntegrationTwoThree
  }

  let organicPesiticide: any = {
    vegetableOrganicPesticide: vegetableOrganicPesticide,
    mangoOrganicPesticide: mangoOrganicPesticide,
    betelLeafOrganicPesticide: betelLeafOrganicPesticide,
    otherOrganicPesticde: otherOrganicPesticde
  }

  let chemicalPesticide: any = {
    vegetableChemicalPesticide: vegetableChemicalPesticide,
    mangoChemicalPesticide: mangoChemicalPesticide,
    betelLeafChemicalPesticide: betelLeafChemicalPesticide,
    otherChemicalPesticide: otherChemicalPesticide
  }

  let fungicideBactericide: any = {
    vegetableFungicideBactericide: vegetableFungicideBactericide,
    mangoFungicideBactericide: mangoFungicideBactericide,
    betelLeafFungicideBactericide: betelLeafFungicideBactericide,
    otherFungicideBactericide: otherFungicideBactericide
  }

  let insectDiseases:any = {
    isIdentify: QCMData.isIdentify,
    isSuggestionsTaken: QCMData.isSuggestionsTaken,
    isPheromoneUsed: QCMData.isPheromoneUsed,
    pheromoneUsedTime: QCMData.pheromoneUsedTime,
    isCropPheromoneUsed: QCMData.isCropPheromoneUsed,
    isChemicalPesticideUsed: QCMData.isChemicalPesticideUsed,
    isHormonesUsed: QCMData.isHormonesUsed
  }

  let vegetables:any = {
    isTimelyControllingPests: QCMData.isTimelyControllingPests,
    isTimelyControllingDiseascs: QCMData.isTimelyControllingDiseascs,
    isPheromoneWorked: QCMData.isPheromoneWorked,
    isRegularlyMonitored: QCMData.isRegularlyMonitored,
    isBagUsed: QCMData.isBagUsed,
    colorBag: QCMData.colorBag
  }

  let mango:any = {
    isProperManagement: QCMData.isProperManagement,
    isBaggingUsed: QCMData.isBaggingUsed,
    isIPMUsed: QCMData.isIPMUsed,
    daysBeforeBagging: QCMData.daysBeforeBagging,
    isMeaserTake: QCMData.isMeaserTake,
    isLodgedBurned: QCMData.isLodgedBurned,
    isRightAnthracnose: QCMData.isRightAnthracnose
  }

  let betelLeaf:any = {
    isSalmonellaProtection: QCMData.isSalmonellaProtection,
    isChemicalOrganicUsed: QCMData.isChemicalOrganicUsed,
    isPreventingExcretion: QCMData.isPreventingExcretion
  }

  let QCMAllData:any = {
    generalInformationID: '',
    quarantinePestDieases,
    quarantineNamePests,
    quarantinePestDiseseName,
    controlMeasures,
    organicPesiticide,
    chemicalPesticide,
    fungicideBactericide,
    insectDiseases,
    vegetables,
    mango,
    betelLeaf
  }
    
  console.log(QCMData);
  console.log(QCMAllData);
    
  }

}
