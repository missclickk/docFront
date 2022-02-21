import { Injectable } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';

@Injectable({
  providedIn: 'root'
})
export class ColumsFactoryService {

  private buttons =  new Map<TableType,string[]>();
  constructor() { 
    this.buttons.set(TableType.ORGANIZATION, ["название","физический адрес","юридический адрес ","руководитель"]);
    this.buttons.set(TableType.EMPLOYEE, ["фамилия","имя","отчество","должность"] );
    this.buttons.set(TableType.SUBDIVIZON,["название","контактные данные","руководитель"]  );
    this.buttons.set(TableType.ASSIGMENT, ["предмет","автор","исполнители","срок","исполнен","контроль"])
  }
  
  public getColumns( type : TableType) : string[]{
    const potentialColumns = this.buttons.get(type); 
      if(potentialColumns)
        return potentialColumns;
      else 
          throw new Error("Columns not exsist");  
  }
}
