import { Component } from '@angular/core';
import { FertilizerAndFertilizingService } from '../services/fertilizer-and-fertilizing.service';

@Component({
  selector: 'app-fertilizer-and-fertilizing',
  templateUrl: './fertilizer-and-fertilizing.component.html',
  styleUrls: ['./fertilizer-and-fertilizing.component.css']
})
export class FertilizerAndFertilizingComponent {

  fertilizingData:any;

  constructor (private fertilizerAndFertilizingData: FertilizerAndFertilizingService){

    this.getFertilizingData;
  }

  getFertilizingData(){
    this.fertilizerAndFertilizingData.getFFData()
      .subscribe((data)=>{
        this.fertilizingData = data;
        console.log(data);
        
      })
  }

  tableHead = ['ডোজ Dose', 'ইউরিয়া(কেজি) Urea', 'ফসফরাস(কেজি) Phosphorus', 'পটাশ(কেজি) Potash', 'জিংক(কেজি) Zinc', 'অন্যান্য(কেজি) Others']
  tableData = [{ urea: null, phosphorus: null, potash: null, zinc: null, others: null }, { urea: null, phosphorus: null, potash: null, zinc: null, others: null }, { urea: null, phosphorus: null, potash: null, zinc: null, others: null }];


  rowData = [
    { urea: null, phosphorus: null, potash: null, zinc: null, others: null },
    { urea: null, phosphorus: null, potash: null, zinc: null, others: null },
    { urea: null, phosphorus: null, potash: null, zinc: null, others: null }
  ];



  selectedFertilizers: string[] = [];

  checkedFertilizers: any = {
    Chemical: false,
    Organic: false,
    Biofertilizer: false
  }

  checkedAppliedFertilizers: any = {
    Urea: false,
    Potash: false,
    Phosphorus: false,
    Zinc: false
  }

  isOtherFertilizersDisabled = true;
  EnableFertilizerField(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.isOtherFertilizersDisabled = value === 'disable';
  }

  onFertilizerSelectionChange(event: any, fertilizer: string) {
    if (event.target.checked) {
      this.selectedFertilizers.push(fertilizer);
    } else {
      const index = this.selectedFertilizers.indexOf(fertilizer);
      if (index !== -1) {
        this.selectedFertilizers.splice(index, 1);
      }
    }
  }

  submitted = false;

  onSubmitFertilizerAndFertilizing(FFData: any) {

    this.submitted = true;

    let checkedAppliedFertilizersOptions = Object.keys(this.checkedAppliedFertilizers)
      .filter(key => this.checkedAppliedFertilizers[key]);

    if (FFData.otherFertilizerUsed) {
      checkedAppliedFertilizersOptions.push(FFData.otherFertilizerUsed);
    }

    // let array: any[] = [FFData.urea1, FFData.urea2, FFData.urea3]

    let landPreparationFertilizer: any = {
      fertilizingTime: FFData.fertilizingTime,
      isFertilizerUsed: FFData.isFertilizerUsed,
      fertilizerType: this.selectedFertilizers
    }

    let fertilizerNameQuantity: any = {
      isUreaUsed: FFData.isUreaUsed,
      ureaQuantity: FFData.ureaQuantity,
      isPotashUsed: FFData.isPotashUsed,
      potashQuantity: FFData.potashQuantity,
      isOrganicUsed: FFData.isOrganicUsed,
      organicQuantity: FFData.organicQuantity,
      isCowDungUsed: FFData.isCowDungUsed,
      cowDungQuantity: FFData.cowDungQuantity,
      isPhosphorusUsed: FFData.isPhosphorusUsed,
      phosphorusQuantity: FFData.phosphorusQuantity,
      isOtherUsed: FFData.isOtherUsed,
      otherQuantity: FFData.otherQuantity
    }

    let fertilizerNamePlant: any = {
      appliedFertilizer: checkedAppliedFertilizersOptions
    }

    let totalNumberOfFertilizer: any = {
      vegetable: FFData.vegetable,
      mango: FFData.mango,
      betelLeaf: FFData.betelLeaf
    }

    let timeOfFertilizerApplicationQuantity: any = {
      urea1: FFData.urea1,
      urea2: FFData.urea2,
      urea3: FFData.urea3,
      phosphorus1: FFData.phosphorus1,
      phosphorus2: FFData.phosphorus2,
      phosphorus3: FFData.phosphorus3,
      potash1: FFData.potash1,
      potash2: FFData.potash2,
      potash3: FFData.potash3,
      zinc1: FFData.zinc1,
      zinc2: FFData.zinc2,
      zinc3: FFData.zinc3,
      other1: FFData.other1,
      other2: FFData.other2,
      other3: FFData.other3,
      organicUsedBefor: FFData.organicUsedBefor,
      betelLeafOrganic: FFData.betelLeafOrganic,
      cowDungType: FFData.cowDungType,
      fertilizerStored: FFData.fertilizerStored,
      fertilizerCollected: FFData.fertilizerCollected,
      isSuggestionsTaken: FFData.isSuggestionsTaken
    }

    let FFAllData: any = {
      generalInformationID: '6427fc064310a9504c8be92b',
      landPreparationFertilizer,
      fertilizerNameQuantity,
      fertilizerNamePlant,
      totalNumberOfFertilizer,
      timeOfFertilizerApplicationQuantity
    }



    // console.log(this.selectedFertilizers);
    // console.log(checkedAppliedFertilizersOptions);
    console.log(FFData);
    console.log(FFAllData);
    this.fertilizerAndFertilizingData.addFFData(FFAllData)
      .subscribe(((result)=>{
        console.warn(result);
      }))
    
    // console.log(array);



  }
}
