import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginUsers } from "./users";



@Injectable(
 {providedIn:'root'}
)
 export class Models3 {
  
   constructor(private http:HttpClient){
       
   }
   Post(users:LoginUsers){
    return this.http.post('https://localhost:44314/CompareUsers',users)
   }
   Get(){
    return this.http.get('https://localhost:44314/UsersController')
   }
   Delete(id:any){
    return this.http.delete('https://localhost:44314/UsersController'+'/'+ id)
   }
}