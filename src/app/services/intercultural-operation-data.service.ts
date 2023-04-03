import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterculturalOperationDataService {

  IOGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/'
  IOPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/add'

  constructor(private http:HttpClient) { }

  getIOData(){
    return this.http.get(this.IOGetUrl);
  }

  addIOData(data:any){
    return this.http.post(this.IOPostUrl, data)
  }
}
