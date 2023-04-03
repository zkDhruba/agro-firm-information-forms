import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrrigationSourceService {

  IISGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/irrigation-source/get/6427fc064310a9504c8be92b';
  IISPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/irrigation-source/add';

  constructor(private http:HttpClient) { }

  getIISData () {
    return this.http.get(this.IISGetUrl);
  }

  addIISData(data:any) {
    return this.http.post(this.IISPostUrl, data);
  }
}
