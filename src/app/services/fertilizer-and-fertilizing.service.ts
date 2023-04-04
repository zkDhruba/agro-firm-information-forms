import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FertilizerAndFertilizingService {

  FFGetUrl = "https://modern-pink-trench-coat.cyclic.app/api/fertilizer-fertilizing/get-by-general-information-id/6427fc064310a9504c8be92b";
  FFPostUrl = "https://modern-pink-trench-coat.cyclic.app/api/fertilizer-fertilizing/add"

  constructor(private http:HttpClient) { }

  getFFData(){
    return this.http.get(this.FFGetUrl);
  }

  addFFData(data:any){
    return this.http.post(this.FFPostUrl, data);
  }
}
