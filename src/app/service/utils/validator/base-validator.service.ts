import { Injectable } from '@angular/core';
import { ValidateType } from 'src/app/model/enum/ValidateType';

@Injectable({
  providedIn: 'root'
})
export class BaseValidatorService {
 
  constructor() { 
   
  }

public static stringIsEmpty( str : string ) : boolean{
  return str.length ==0 ? true : false;
}

public  stringIsEmpty( ...strs : string[] ) : boolean{
 return strs.filter(el => el.length == 0).length != strs.length;
}

}
