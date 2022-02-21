import { Observable } from "rxjs";
import { Dto } from "src/app/model/interface/Dto";

export interface EntityService{
    save(entity : any) : Observable<any>;
    getPage(page: number) : Observable<any>;
}