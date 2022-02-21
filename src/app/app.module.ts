import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { WorkSpaceComponent } from './component/work-space/work-space.component';
import { WorkSpaceMenuComponent } from './component/work-space/work-space-menu/work-space-menu.component';
import { ButtonComponent } from './component/work-space/work-space-menu/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './component/menu-bar/item/item.component';
import { BookmarksBarComponent } from './component/work-space/bookmarks-bar/bookmarks-bar.component';
import { BookmarkComponent } from './component/work-space/bookmarks-bar/bookmark/bookmark.component';
import { SpaceComponent } from './component/work-space/space/space.component';
import { DataTableComponent } from './component/work-space/space/data-table/data-table.component';
import { EntityConstructorComponent } from './component/work-space/space/entity-constructor/entity-constructor.component';
import { OrgFormComponent } from './component/work-space/space/entity-constructor/from/org-form/org-form.component';
import { EmployeeFormComponent } from './component/work-space/space/entity-constructor/from/employee-form/employee-form.component';
import { OrgConstructorComponent } from './component/work-space/space/entity-constructor/org-constructor/org-constructor.component';
import { TableRowComponent } from './component/work-space/space/data-table/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    WorkSpaceComponent,
    WorkSpaceMenuComponent,
    ButtonComponent,
    ItemComponent,
    BookmarksBarComponent,
    BookmarkComponent,
    SpaceComponent,
    DataTableComponent,
    EntityConstructorComponent,
    OrgFormComponent,
    EmployeeFormComponent,
    OrgConstructorComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
