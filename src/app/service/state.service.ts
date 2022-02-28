import {Injectable } from '@angular/core';
import { ActionType } from '../model/enum/ActionType';
import { TableType } from '../model/enum/TableType';
import { Bookmark } from '../model/interface/Bookmark';
import { MenuItem } from '../model/interface/MenuItem';

@Injectable({
  providedIn: 'root'
})
export  class StateService {
  private currentBookmark: Bookmark | null = null ;
  private bookmarks : Bookmark[] = [];
  private menuItems : MenuItem[] = [
    {title:"Справочник организации", tableType: TableType.ORGANIZATION, child : [
      {title:"Оргструктура",tableType:TableType.SUBDIVIZON},
      {title:"Все сотрудники",tableType:TableType.EMPLOYEE}
    ]},
    {title:"Поручения", tableType: TableType.NONE, child :[
      {title:"Все поручения",tableType:TableType.ASSIGMENT},
      {title:"Мои поручения",tableType:TableType.ASSIGMENT},
      {title:"Поручения мне",tableType:TableType.ASSIGMENT},
    ]}
  ];
  constructor() { }

  public getMenuItems() : MenuItem[]{
    return this.menuItems;
  }

  public setMenuItems(menuItems : MenuItem[]) : void {
    this.menuItems = menuItems;
  }

  public getBookmarks() : Bookmark[] {
    return this.bookmarks;
  }

  public setBookmarks ( bookmarks : Bookmark[]  ) : void {
    this.bookmarks = bookmarks;
  }

  public addBookmark ( bookmark : Bookmark ) : void {
    bookmark.id = Date.now();
    this.setCurrentBookmark(bookmark);
    this.bookmarks.push(bookmark);
  }

  public deleteBookmark(index:number) : void {
    if( this.currentBookmark!== null && this.currentBookmark.id === index)
       this.setCurrentBookmark(null);    
    this.bookmarks = this.bookmarks.filter(el => el.id !== index )
  }

  public getCurrentBookmark() : Bookmark | null {
    return this.currentBookmark;
  }

  public setCurrentBookmark( bookmark : Bookmark|null) : void {
    this.currentBookmark = bookmark;
  }

  public setStateOfCurrentBookmark ( value : string , formType : TableType , inputNumber : number) : void {
    const state : Map<TableType, string[]> = this.currentBookmark?.state || new Map<TableType,string[]>();
    const inputs : string[] = state.get(formType) || new Array<string>();
    inputs[inputNumber] = value;
    state.set(formType,inputs);
    if(this.currentBookmark)
      this.currentBookmark.state = state;   
    }

  public getInputsForCurrentBookmark(formtype : TableType) : string[] {
    return this.currentBookmark?.state.get(formtype) || [];
  }

  public getActionType() : ActionType {
    return this.currentBookmark?.action || ActionType.NONE;
  }

  public setActionType( action: ActionType ) : void {
    if(this.currentBookmark)
      this.currentBookmark.action = action;
  } 

}
