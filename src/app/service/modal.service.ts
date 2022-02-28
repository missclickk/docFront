import { Injectable } from '@angular/core';
import { DeleteModalComponent } from '../component/modal/delete-modal/delete-modal.component';
import { ServiceFactoryService } from './entityService/service-factory.service';
import { StateService } from './state.service';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private table: TableService,private state:StateService, private serviceFactory : ServiceFactoryService){};

  public getModal() : DeleteModalComponent  {
    return new DeleteModalComponent(this.table, this.state, this.serviceFactory);
  }
}
