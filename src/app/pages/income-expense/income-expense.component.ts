import { Component } from '@angular/core';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.css']
})
export class IncomeExpenseComponent {

  tableHead = ['সিরিয়াল নং/SI. No', 'আইটেম / Item', 'মোট খরচ / Total Cost'];
  rowData = [
    { item: 'জমির লিজ মূল্য / Lease', expenditure: null },
    { item: 'মাটির পরীক্ষা / Soil Test', expenditure: null },
    { item: 'জমি তৈরী / Land Preparation', expenditure: null },
    { item: 'বীজ / Seed', expenditure: null },
    { item: 'সার / Firtilizer', expenditure: null },
    { item: 'সেচ / Irrigation', expenditure: null },
    { item: 'আন্তঃপরিচর্যা / Intercultural Operation', expenditure: null },
    { item: 'শ্রমিক / Labour', expenditure: null },
    { item: 'পরিবহন / Transport', expenditure: null },
    { item: 'অন্যান্য / Others', expenditure: null },
    { item: 'মোট খরচ (টাকা) খ Total Expenses', expenditure: null },
    { item: 'মোট উৎপাদন(টন) Total Production(Ton)', expenditure: null },
    { item: 'মোট বিক্রয় (টাকা) ক Total Sale', expenditure: null },
    { item: 'মুনাফা (ক - খ) টাকা Total Income', expenditure: null }
  ];

  leaseCost:number = 0;
  soilTestCost:number = 0;
  landPreparationCost:number = 0;
  seedCost:number = 0;
  fertilizerCost:number = 0;
  irrigationCost:number = 0;
  interCulturalCost:number = 0;
  laborCost:number = 0;
  transportCost:number = 0;
  otherCost:number = 0;
  totalSale:number = 0;
  totalCost:number = this.leaseCost + this.soilTestCost + this.landPreparationCost + this.seedCost + this.fertilizerCost + this.irrigationCost + this.interCulturalCost + this.laborCost + this.transportCost + this.otherCost;


  onSubmitIncomeExpense(IEData: any) {
    IEData.
    console.log(IEData);

  }
}
