import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css']
})
export class WorkSpaceComponent implements OnInit {
  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

}
