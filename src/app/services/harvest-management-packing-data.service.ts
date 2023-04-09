import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HarvestManagementPackingDataService {

  HMPGetUrl = "https://modern-pink-trench-coat.cyclic.app/api/management-packaging/get-by-general-information-id/642e5473205d903eaf7a5f7e";
  HMPPostUrl = "https://modern-pink-trench-coat.cyclic.app/api/management-packaging/add";

  constructor(private http:HttpClient) { }

  getHMPData (){
    return this.http.get(this.HMPGetUrl);
  }

  addHMPData (data: any) {
    return this.http.post(this.HMPPostUrl, data);
  }
}
