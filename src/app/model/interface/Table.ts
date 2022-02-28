import { Row } from "./Row";

export interface Table{
    focused : boolean;
    focusedRow : Row;
    rows : Row[];
    totalRows : number;
    
}