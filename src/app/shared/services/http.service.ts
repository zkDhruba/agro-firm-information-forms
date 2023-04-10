import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  GIUrl = 'https://modern-pink-trench-coat.cyclic.app/api/genarel-information/';
  GIPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/genarel-information/add';

  PIGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/production-information/get-production-information/641c3a235c84746020a9414f';
  PIPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/production-information/add';

  IISGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/irrigation-source/get/6427fc064310a9504c8be92b';
  IISPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/irrigation-source/add';

  IOGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/6427a984c7179916780c5de8';
  IOPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/intercultural-operation/add';

  FFGetUrl = "https://modern-pink-trench-coat.cyclic.app/api/fertilizer-fertilizing/get-by-general-information-id/6427fc064310a9504c8be92b";
  FFPostUrl = "https://modern-pink-trench-coat.cyclic.app/api/fertilizer-fertilizing/add";

  QCMGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/quarantine-pests-diseases/get-by-general-information-id/6427a94cc7179916780c5de4';
  QCMPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/quarantine-pests-diseases/add';

  CHGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/crops-harvesting/get-by-general-information-id/642e5473205d903eaf7a5f7e';
  CHPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/crops-harvesting/add';

  HMPGetUrl = "https://modern-pink-trench-coat.cyclic.app/api/management-packaging/get-by-general-information-id/642e5473205d903eaf7a5f7e";
  HMPPostUrl = "https://modern-pink-trench-coat.cyclic.app/api/management-packaging/add";

  PWHGetUrl = 'https://modern-pink-trench-coat.cyclic.app/api/personal-worker-hygiene/get-by-general-info-id/642e543b49b5e5cf724c71da';
  PWHPostUrl = 'https://modern-pink-trench-coat.cyclic.app/api/personal-worker-hygiene/add';



  constructor(private http: HttpClient) { }

  getGIData(){
    return this.http.get(this.GIUrl);
  }

  addGIData(data:any){
    return this.http.post(this.GIPostUrl, data);
  }

  getPIData () {
    return this.http.get(this.PIGetUrl);
  }

  addPIData (data: any){
    return this.http.post(this.PIPostUrl, data);
  }

  getIISData () {
    return this.http.get(this.IISGetUrl);
  }

  addIISData(data:any) {
    return this.http.post(this.IISPostUrl, data);
  }

  getIOData(){
    return this.http.get(this.IOGetUrl);
  }

  addIOData(data:any){
    return this.http.post(this.IOPostUrl, data)
  }

  getFFData(){
    return this.http.get(this.FFGetUrl);
  }

  addFFData(data:any){
    return this.http.post(this.FFPostUrl, data);
  }

  getQCMData(){
    return this.http.get(this.QCMGetUrl);
  }

  addQCMData(data:any){
    return this.http.post(this.QCMPostUrl, data);
  }

  getCHData () {
    return this.http.get(this.CHGetUrl);
  }

  addCHData (data:any) {
    return this.http.post(this.CHPostUrl, data)
  }

  getHMPData (){
    return this.http.get(this.HMPGetUrl);
  }

  addHMPData (data: any) {
    return this.http.post(this.HMPPostUrl, data);
  }

  getPWHData (){
    return this.http.get(this.PWHGetUrl);
  }

  addPWHData (data:any){
    return this.http.post(this.PWHPostUrl, data);
  }

}
