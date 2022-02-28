import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-entity-constructor',
  templateUrl: './entity-constructor.component.html',
  styleUrls: ['./entity-constructor.component.css']
})
export class EntityConstructorComponent implements OnInit {
  constructor(public state:StateService, public tableState : TableService) { }

  ngOnInit(): void {
  }



}
