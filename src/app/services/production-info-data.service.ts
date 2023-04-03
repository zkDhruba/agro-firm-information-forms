import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductionInfoDataService {

  PIGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/production-information/get-production-information/641c3a235c84746020a9414f';
  PIPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/production-information/add';

  constructor(private http: HttpClient) { }

  getPIData () {
    return this.http.get(this.PIGetUrl);
  }

  addPIData (data: any){
    return this.http.post(this.PIPostUrl, data);
  }
}
