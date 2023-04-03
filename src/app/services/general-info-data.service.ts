import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoDataService {

  

  GIUrl = 'https://modern-pink-trench-coat.cyclic.app/api/genarel-information/';
  GIPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/genarel-information/add';

  constructor(private http:HttpClient ) { }

  getGIData(){
    return this.http.get(this.GIUrl);
  }

  addGIData(data:any){
    return this.http.post(this.GIPostUrl, data);
  }


}
