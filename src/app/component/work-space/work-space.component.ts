import { Component, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/model/enum/buttonType';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css']
})
export class WorkSpaceComponent implements OnInit {
  public readonly buttonType = ButtonType;

  constructor() { }

  ngOnInit(): void {
  }

}
