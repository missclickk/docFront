import { Injectable, OnInit } from '@angular/core';
import { ButtonType } from '../../model/enum/buttonType';
import { Button } from '../../model/interface/Button';
import { ButtonActionFactoryService } from './button-action-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonFactoryService  {
  private buttons =  new Map<ButtonType,Button>();
  constructor(private actionFactory:  ButtonActionFactoryService) { 
    this.buttons.set(ButtonType.CREATE, {title:"Создать", action : actionFactory.getAction(ButtonType.CREATE),  style: "btn-success"} );
    this.buttons.set(ButtonType.UPDATE, {title:"Редактировать", action : actionFactory.getAction(ButtonType.UPDATE), style: "btn-warning"} );
    this.buttons.set(ButtonType.DELETE, {title:"Удалить", action : actionFactory.getAction(ButtonType.DELETE), style: "btn-danger"} );
    this.buttons.set(ButtonType.BOOKMARK, {title:"", action : actionFactory.getAction(ButtonType.BOOKMARK), style: "btn-light"} );
  }
  
  public getButton( type : ButtonType) : Button{
    const potentialBtn = this.buttons.get(type); 
      if(potentialBtn)
        return potentialBtn;
      else 
          throw new Error("Button not exsist");  
  }

}
