import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class DataServise {
  
  constructor(protected url:string, protected http:HttpClient) { }
  
  getAll(){
   return  this.http.get(this.url);
  }
  // user resource comme un variable generale 
  create(resource:any) {
   
  return  this.http.post(this.url,resource);
  }
  update(resource:any){
    return  this.http.put(this.url + "/"+ resource.id,resource);
  }

  // gerer les erreur dans le servises avec throw et cathc 
  delete(resource:any) {
    return this.http.delete(this.url + "/" +resource.id);
  }

}
