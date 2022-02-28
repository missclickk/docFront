export interface Employee{
     id? : number,
     firstName : string;
     lastName : string;
     patronymic : string;
     position? : {
          id : number,
          name? : string,
     };   

}