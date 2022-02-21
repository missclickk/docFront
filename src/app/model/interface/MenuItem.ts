import { TableType } from "../enum/TableType";

export interface MenuItem{
    title : string,
    child? : MenuItem[],
    tableType : TableType
}