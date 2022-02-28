import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/service/modal.service';
import { TableService } from 'src/app/service/table.service';
import {ServiceFactoryService} from 'src/app/service/entityService/service-factory.service'
import { StateService } from 'src/app/service/state.service';
import { TableType } from 'src/app/model/enum/TableType';
import { Event } from '@angular/router';
import { EntityService } from 'src/app/service/entityService/EntityService';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  closeResult = '';
  public visible : boolean =true;
  private actionService : EntityService;
  constructor(private tableService: TableService, public state:StateService, private serviceFactory : ServiceFactoryService) {
    this.actionService = serviceFactory.getService(state.getCurrentBookmark()?.table || TableType.NONE);
  }

  ngOnInit(): void {
      let elem : any = document.querySelector(".modalConteiner");
      elem.style.width = window.innerWidth;
      elem.style.height = window.innerHeight;
  }

  public delete(event:any){
    const id : number = this.tableService.getFocusedRow().data.id;
    this.actionService.delete(id).subscribe(
      (result : any)=>{
        let elem : Element | null = document.querySelector(".modalConteiner");
        if(elem){
          elem.parentNode?.removeChild(elem);
        }
    
    })
  }

  public hideWindow(event : any){
    let elem : Element =  event.target as Element;
    if(elem.classList.contains("hideElem")){
    let elem : Element | null = document.querySelector(".modalConteiner");
      if(elem){
        elem.parentNode?.removeChild(elem);
      }
    }
  }

}
