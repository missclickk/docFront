import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonType } from 'src/app/model/enum/buttonType';
import { Button } from 'src/app/model/interface/Button';
import { ButtonFactoryService } from 'src/app/service/components-factorys/button-factory.service';
import { ModalService } from 'src/app/service/modal.service';
import { StateService } from 'src/app/service/state.service';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType! : ButtonType;
  @Output() onDeleteEvent = new EventEmitter();
  public btn! : Button;
  constructor(private btnFactory: ButtonFactoryService) {}

  ngOnInit(): void {
    this.btn = this.btnFactory.getButton(this.buttonType);
    }



  public action(){
    if(this.buttonType == ButtonType.DELETE)
    this.onDeleteEvent.emit("");
    else
        this.btn.action();
  }  

  }
