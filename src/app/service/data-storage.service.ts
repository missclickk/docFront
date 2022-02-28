import { Injectable } from '@angular/core';
import { TableType } from '../model/enum/TableType';
import { StorageItem } from '../model/interface/StorageItem';
import { EntityService } from './entityService/EntityService';
import { ServiceFactoryService } from './entityService/service-factory.service';
import { StateService } from './state.service';
import { TableService } from './table.service';
import { DataFormaterForTableService } from './utils/formater/data-formater-for-table.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private dataStorage : StorageItem[]  = [];
  constructor(public state: StateService, private factory : ServiceFactoryService
    , public tableService: TableService, private formater: DataFormaterForTableService ) {
    
      
   }

   public setDataToSotrage( type : TableType, data : any   ) : void { 
        this.dataStorage = data.map((el : any ,i : number) => {;
          const tableData = this.formatDataForCurrentTable(el);      
          return { id: i, tableFormatData: tableData, data: el}
        });
   }

   public getDataStorage() : StorageItem[] {
      return this.dataStorage;
   }



   private formatDataForCurrentTable( data : any ) : any {
        const type : TableType = this.state.getCurrentBookmark()?.table || TableType.NONE;
        return this.formater.formatData( type , data);    
   }



}
