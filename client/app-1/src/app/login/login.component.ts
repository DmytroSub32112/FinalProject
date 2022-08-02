import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginUsers } from './users';
import { FormControl,FormGroup} from '@angular/forms';
import { Models3 } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serv: Models3) { }

  myform:any;
  value:any;
  users:any;
 @Input() user:any;
  ngOnInit(): void {
    this.myform = new FormGroup({
     
      password :new FormControl("Введите пароль"),
        login :new FormControl("Введите логин")
    })

  this.serv.Get().subscribe((data: any) => this.users = data);
  }
  Submit(myform:any){
    let users =new LoginUsers(
     this.myform.value.password,
     this.myform.value.login,
   );
   console.log(users)
  this.serv.Post(users).subscribe((data: any) => this.value = data);
  console.log(this.value)
}
Fix(item:any){
 this.user = item
 console.log(this.user);
}
Delete(id:any){
      this.serv.Delete(id).subscribe();
}
}
