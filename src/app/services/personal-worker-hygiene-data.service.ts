import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalWorkerHygieneDataService {

  PWHGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/personal-worker-hygiene/get-by-general-info-id/642e543b49b5e5cf724c71da';
  PWHPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/personal-worker-hygiene/add';

  constructor(private http:HttpClient) { }

  getPWHData (){
    return this.http.get(this.PWHGetUrl);
  }

  addPWHData (data:any){
    return this.http.post(this.PWHPostUrl, data);
  }

}
