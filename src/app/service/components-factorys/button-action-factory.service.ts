import { Injectable, ViewContainerRef } from '@angular/core';
import { ActionType } from '../../model/enum/ActionType';
import { BookmarkMode } from '../../model/enum/BookmarkMode';
import { ButtonType } from '../../model/enum/buttonType';
import { ModalService } from '../modal.service';
import { StateService } from '../state.service';
import { TableService } from '../table.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonActionFactoryService {
  private readonly actions = new Map<ButtonType, Function>(); 
  constructor(private state : StateService, private tableService : TableService, private modalService: ModalService) { 
      this.actions.set(ButtonType.CREATE, function(args: any[]):void {
        let table =  state.getCurrentBookmark()?.table;
        if(table)
         state.addBookmark({table, mode : BookmarkMode.EntityConstructor, state:new Map(), action : ActionType.SAVE})
      });
      
      this.actions.set(ButtonType.DELETE,  function():void { 
          
      });
      this.actions.set(ButtonType.UPDATE, function():void {
        let table =  state.getCurrentBookmark()?.table;
        if(table)
          state.addBookmark({table, mode : BookmarkMode.EntityConstructor, state:new Map(), action : ActionType.UPDATE})
          
      });
      this.actions.set(ButtonType.BOOKMARK, function():void {
        console.log("BOOKMARK")
      });
  }

  public getAction( type : ButtonType) : Function{
    const potentialAction = this.actions.get(type); 
      if(potentialAction)
        return potentialAction;
      else 
          throw new Error("Action not exsist");  
  }

}
