import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuarantineControlMeasureDataService {

  QCMGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/quarantine-pests-diseases/get-by-general-information-id/6427a94cc7179916780c5de4';
  QCMPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/quarantine-pests-diseases/add'

  constructor(private http:HttpClient) { }

  getQCMData(){
    return this.http.get(this.QCMGetUrl);
  }

  addQCMData(data:any){
    return this.http.post(this.QCMPostUrl, data);
  }
}
