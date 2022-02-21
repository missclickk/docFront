import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-entity-constructor',
  templateUrl: './entity-constructor.component.html',
  styleUrls: ['./entity-constructor.component.css']
})
export class EntityConstructorComponent implements OnInit {
  private inputState : Map<string,string[]> = new Map();
  constructor(public state:StateService) { }

  ngOnInit(): void {
  }



}
