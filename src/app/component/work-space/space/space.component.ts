import { state } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'src/app/directive/modal.directive';
import { BookmarkMode } from 'src/app/model/enum/BookmarkMode';
import { StateService } from 'src/app/service/state.service';
import { DeleteModalComponent } from '../../modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  constructor(public state : StateService) { }
  ngOnInit(): void {}
}
