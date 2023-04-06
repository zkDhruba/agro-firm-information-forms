import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CropsHarvestingDataService {

  CHGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/crops-harvesting/get-by-general-information-id/642e5473205d903eaf7a5f7e';
  CHPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/crops-harvesting/add'

  constructor(private http:HttpClient) { }

  getCHData () {
    return this.http.get(this.CHGetUrl);
  }

  addCHData (data:any) {
    return this.http.post(this.CHPostUrl, data)
  }

}
