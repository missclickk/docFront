import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'src/app/directive/modal.directive';
import { ButtonType } from 'src/app/model/enum/buttonType';
import { ModalService } from 'src/app/service/modal.service';
import { TableService} from 'src/app/service/table.service';
import { DeleteModalComponent } from '../../modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-work-space-menu',
  templateUrl: './work-space-menu.component.html',
  styleUrls: ['./work-space-menu.component.css']
})
export class WorkSpaceMenuComponent implements OnInit {
  public tableType  = ButtonType; 
  

  @ViewChild(ModalDirective, {static:true}) appModal!: ModalDirective; 
  constructor(public tableState: TableService, public modalService : ModalService) { }

  ngOnInit(): void {
  }

  public openModal(){
    const viewContainerRef = this.appModal.viewContainerRef;
     viewContainerRef.createComponent<DeleteModalComponent>(DeleteModalComponent);
  
  }

}
