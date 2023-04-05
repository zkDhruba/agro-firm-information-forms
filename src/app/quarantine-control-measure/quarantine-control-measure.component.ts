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
    
    console.log(QCMData);
    
  }

}
