import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/model/enum/buttonType';
import { Button } from 'src/app/model/interface/Button';
import { ButtonFactoryService } from 'src/app/service/button-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType! : ButtonType;
  public btn! : Button;
  constructor(private btnFactory: ButtonFactoryService) {}

  ngOnInit(): void {
    this.btn = this.btnFactory.getButton(this.buttonType);
    }
  }
