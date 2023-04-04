import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterculturalOperationDataService {

  IOGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/6427a984c7179916780c5de8'
  IOPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/add'

  constructor(private http:HttpClient) { }

  getIOData(){
    return this.http.get(this.IOGetUrl);
  }

  addIOData(data:any){
    return this.http.post(this.IOPostUrl, data)
  }
}
