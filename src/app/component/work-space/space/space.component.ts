import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BookmarkMode } from 'src/app/model/enum/BookmarkMode';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  constructor(public state : StateService) { }

  ngOnInit(): void {
    
    console.log(this.state.getCurrentBookmark()?.mode)
    /*
      
      тут на основании етого стета рендерить
      компонент 
    
    */
  }

  public foo () : void {
    console.log("Здарова заебал");
  }

}
