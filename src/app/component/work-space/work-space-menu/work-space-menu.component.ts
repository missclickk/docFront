import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/model/enum/buttonType';

@Component({
  selector: 'app-work-space-menu',
  templateUrl: './work-space-menu.component.html',
  styleUrls: ['./work-space-menu.component.css']
})
export class WorkSpaceMenuComponent implements OnInit {
  @Input() buttonsTypes!:ButtonType[];
  

  constructor() { }

  ngOnInit(): void {
  
  }

}
