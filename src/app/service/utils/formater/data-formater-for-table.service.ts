import { Injectable } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';

@Injectable({
  providedIn: 'root'
})
export class DataFormaterForTableService {
  private strategy = new Map<TableType,Function>();
  constructor() {
      this.strategy.set(TableType.ORGANIZATION, this.orgFormater);
      this.strategy.set(TableType.EMPLOYEE, this.emplFormater);
      this.strategy.set(TableType.ASSIGMENT, this.assignFormater);
      this.strategy.set(TableType.SUBDIVIZON, this.subdivFormater);
   }

public  formatData( type : TableType, data : any ) : any {
   return  this.strategy.get(type)!(data) || null ;

}

private orgFormater( data : any ) : any {
   const name = data.name || "";     
   const legalAddress = data.legalAddress || "";     
   const supervisor = data.supervisor ? (data.supervisor.firstName || " ") + " " + (data.supervisor.lastName || "") 
   + " " + (data.supervisor.patronymic  || ""): "";        
   const physicalAdress = data.physicalAdress || "";
   return [name , physicalAdress, legalAddress, supervisor ]
};

private emplFormater( data : any) : any {
   const firstName = data.firstName || " ";
   const lastNmae = data.lastName || " ";
   const patronymic = data.patronymic || " ";
   const position = data.position.name || " ";
   return [lastNmae, firstName, patronymic, position];
};

private assignFormater( data : any) : any {
      const subject = data.subject || "";
      const periodOfExecution = data.periodOfExecution || "";
      const text = data.text || "";
      const signOfExecution = data.signOfExecution? "ДА" : "НЕТ";
      const signOfControl = data.signOfControl? "ДА" : "НЕТ";
      const author = data.author ? (data.author.firstName || " ") + (data.author.lastName || "")  : "  ";
      return [subject, periodOfExecution, text, signOfExecution, signOfControl, author];
   };

private subdivFormater( data : any) : any {
   const name = data.name;
   const contactData = data.contactData;
   const supervisor = data.supervisor ? (data.supervisor.firstName || " " ) + (data.supervisor.lastName || "") 
   + (data.supervisor.patronymic || "") : "";
   const organization = data.organization.name;
   return [name, contactData, supervisor, organization  ];
};

}