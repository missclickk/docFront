import { Component } from '@angular/core';
import { ActionType } from './model/enum/ActionType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public actionType  = ActionType;
  public isCollapsed = false;
  title = 'exam-front';

  constructor(){
  }

}
