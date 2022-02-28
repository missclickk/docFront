import { Injectable } from '@angular/core';
import { Row } from '../model/interface/Row';
import { Table } from '../model/interface/Table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private table : Table = {focused: false , focusedRow : {index : -1 , data: new Map()}, rows: [], totalRows: 0};
  constructor() { }

  public isFocused() : boolean{
    return this.table.focused;
  }

  public setFocused(focused : boolean) : void {
    this.table.focused = focused;
  }

  public getFocusedRow() : Row{
    return this.table.focusedRow;
  }

  public setFocusedRow(row : Row) : void {
    this.table.focusedRow = row;
  }

  public getRows() : Row[]{
    return this.table.rows;
  }

  public setRowsFromContent( content :  any) : void {
    const rows : Row[] = [];
    content.forEach((data : any , index : number ) => {  
      rows.push({index, data});
    });
    this.table.rows = rows;
  }

  public getTotalRows() : number {
    return this.table.totalRows;
  }

  public setTotalRows( totalRows : number ) : void {
    this.table.totalRows = totalRows;
  }

}
