import { Component } from '@angular/core';

@Component({
  selector: 'app-fertilizer-and-fertilizing',
  templateUrl: './fertilizer-and-fertilizing.component.html',
  styleUrls: ['./fertilizer-and-fertilizing.component.css']
})
export class FertilizerAndFertilizingComponent {

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
  submitted = false;

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

  onSubmitFertilizerAndFertilizing(FFData: any) {

    this.submitted = true;

    let checkedAppliedFertilizersOptions = Object.keys(this.checkedAppliedFertilizers)
      .filter(key => this.checkedAppliedFertilizers[key]);

    if (FFData.otherFertilizerUsed) {
      checkedAppliedFertilizersOptions.push(FFData.otherFertilizerUsed);
    }

    // let array: any[] = [FFData.urea1, FFData.urea2, FFData.urea3]

    console.log(this.selectedFertilizers);
    console.log(checkedAppliedFertilizersOptions);
    console.log(FFData);
    // console.log(array);



  }
}
