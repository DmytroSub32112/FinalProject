import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { RegistrUsers } from './user';
import { Models2 } from './regist.service';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent implements OnInit {

  myform:any;
 
  constructor(private user:Models2) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormControl("Введите имя"),
      lastname: new FormControl("Номер фамилию"),
      patronomic: new FormControl(" Введите отчечтво"),
      password :new FormControl("Введите пароль"),
        date: new FormControl("Введите дату рождения"),
        mobilenumber: new FormControl("Номер телефона"),
        emaill: new FormControl(" Введите Email",[Validators.email]),
        login :new FormControl("Введите логин"),
        link:new FormControl("Link")

    })
  }
  Submit(myform:any){
 let users =new RegistrUsers(
  this.myform.value.name,
  this.myform.value.lastname,
  this.myform.value.patronomic,
  this.myform.value.password,
  this.myform.value.date,
  this.myform.value.mobilenumber,
  this.myform.value.emaill,
  this.myform.value.login,
  this.myform.value.link
);
console.log(users)
this.user.Post(users).subscribe();

  }

}
