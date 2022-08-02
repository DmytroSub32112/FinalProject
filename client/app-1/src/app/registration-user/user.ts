export class RegistrUsers{
    Id:any =2;
    Name:any;
    LastName:any;
    Patronymic:any;
      Password:any;
        DateofBirth:any;
        Mobile:any;
        Email: any;
        Login :any;
        URL:any;
    constructor(n:any,laname:any,patr:any,pass:any,date:any,mob:any,em:any, log:any,link:any){
    this.Name =n;
    this.LastName =laname;
    this.Patronymic =patr;
    this.Password =pass;
    this.DateofBirth = date;
    this.Mobile =mob;
    this.Email =em;
    this.Login =log;
    this.URL =link
    }
}