import { Observable } from "rxjs";
import { Dto } from "src/app/model/interface/Dto";

export interface EntityService{
    save(entity : any) : Observable<any>;
    update(entity : any) : Observable<any>;
    getPage(page: number) : Observable<any>;
    getAll() : Observable<any>;
    delete( id : number) : Observable<any>;
 //   formatDataForTable(data : any) : any;
}