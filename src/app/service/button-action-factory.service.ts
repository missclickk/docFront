import { Injectable } from '@angular/core';
import { BookmarkMode } from '../model/enum/BookmarkMode';
import { ButtonType } from '../model/enum/buttonType';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonActionFactoryService {
  private readonly actions = new Map<ButtonType, Function>(); 

  constructor(private state : StateService) { 
      this.actions.set(ButtonType.CREATE, function(args: any[]):void {
        let table =  state.getCurrentBookmark()?.table;
        if(table)
         state.addBookmark({table, mode : BookmarkMode.EntityConstructor, state:new Map()})
      });
      
      this.actions.set(ButtonType.DELETE,  function():void {
                console.log("DELETE")
      });
      this.actions.set(ButtonType.UPDATE, function():void {
        console.log("UPDATE")
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
