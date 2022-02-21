import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dto } from 'src/app/model/interface/Dto';
import { BaseHttpService } from '../http/base-http.service';
import { EntityService } from './EntityService';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseEntityService<H extends BaseHttpService<T>, T extends Dto > implements EntityService {

  constructor( @Inject('H extends BaseHttpService<T>') private httpService : H) { 
      
  }

  public save(entity : T) : Observable<T>  {  
     return this.httpService.create(entity);
  }

  public getPage(page: number): Observable<any> {
      return this.httpService.getPage(page);
  }

  

}

