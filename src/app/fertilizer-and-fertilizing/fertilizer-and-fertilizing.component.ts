import { Component } from '@angular/core';

@Component({
  selector: 'app-fertilizer-and-fertilizing',
  templateUrl: './fertilizer-and-fertilizing.component.html',
  styleUrls: ['./fertilizer-and-fertilizing.component.css']
})
export class FertilizerAndFertilizingComponent {

  tableHead = ['ডোজ সংখ্যা Dose No.','ইউরিয়া(কেজি) Urea','ফসফরাস(কেজি) Phosphorus','পটাশ(কেজি) Potash','জিংক(কেজি) Zinc','অন্যান্য(কেজি) Others']
  tableData: any = [
    { column1: 10, column2: 'Row 1 Column 2', column3: 'Row 1 Column 3',column4: 'Row 1 Column 3', column5: 'Row 1 Column 3' }
  ];

  checkedFertilizers: any = {
    Chemical: false,
    Organic: false,
    Biofertilizer: false
  }

  checkedAppliedFertilizers:any = {
    Urea: false,
    Potash: false,
    Phosphorus: false,
    Zinc: false
  }

  isOtherFertilizersDisabled = true;
  EnableFertilizerField(event: Event){
    const value = (event.target as HTMLInputElement).value;
    
    this.isOtherFertilizersDisabled = value === 'disable';
  }
  submitted = false;

  onSubmitFertilizerAndFertilizing(FFData:any){

    this.submitted = true;

    const checkedFertilizersOptions = Object.keys(this.checkedFertilizers)
    .filter(key => this.checkedFertilizers[key]);

    let checkedAppliedFertilizersOptions = Object.keys(this.checkedAppliedFertilizers)
    .filter(key => this.checkedAppliedFertilizers[key]);

    if (FFData.otherFertilizerUsed){
      checkedAppliedFertilizersOptions.push(FFData.otherFertilizerUsed);
    }

    console.log(checkedFertilizersOptions);
    console.log(checkedAppliedFertilizersOptions);
    console.log(FFData);
    
    
  }
}