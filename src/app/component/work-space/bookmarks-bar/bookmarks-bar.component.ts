import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/model/interface/Bookmark';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-bookmarks-bar',
  templateUrl: './bookmarks-bar.component.html',
  styleUrls: ['./bookmarks-bar.component.css'],
})
export class BookmarksBarComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

  public closeBookmark( id: string) : void {
    this.state.deleteBookmark(Number.parseInt(id));
  }

  public chooseBookmark( bookmark : Bookmark ) : void {
    this.state.setCurrentBookmark(bookmark);
  }

}
