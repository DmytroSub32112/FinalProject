import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegistrUsers } from "./user";



@Injectable(
 {providedIn:'root'}
)
 export class Models2 {
  
   constructor(private http:HttpClient){
       
   }
   Post(users:RegistrUsers){
    return this.http.post('https://localhost:44314/UsersController',users)
   }
}
