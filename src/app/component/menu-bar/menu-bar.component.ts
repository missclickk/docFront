import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/interface/MenuItem';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  public isCollapsed = true;
  constructor(private state : StateService) { }

  public getMenuItems() : MenuItem[] {
    return this.state.getMenuItems();
  }

  ngOnInit(): void {
  }
}
