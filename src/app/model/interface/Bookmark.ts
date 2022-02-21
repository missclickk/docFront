import { BookmarkMode } from "../enum/BookmarkMode";
import { TableType } from "../enum/TableType";



export interface Bookmark{
    id? : number;
    table : TableType;
    mode : BookmarkMode;
    state : Map<any, string[]>

}