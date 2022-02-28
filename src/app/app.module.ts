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
import { DeleteModalComponent } from './component/modal/delete-modal/delete-modal.component';
import { ModalDirective } from './directive/modal.directive';
import { SubdivisionFormComponent } from './component/work-space/space/entity-constructor/from/subdivision-form/subdivision-form.component'
import { AssigmentFormComponent } from './component/work-space/space/entity-constructor/from/assigment-form/assigment-form.component';
import { EmployeeConstructorComponent } from './component/work-space/space/entity-constructor/employee-constructor/employee-constructor.component';
import { AssigmentConstructorComponent } from './component/work-space/space/entity-constructor/assigment-constructor/assigment-constructor.component'
import { SubdivisionConstructorComponent } from './component/work-space/space/entity-constructor/subdivision-constructor/subdivision-constructor.component';
import { FormsModule } from '@angular/forms';



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
    DeleteModalComponent,
    ModalDirective,
    SubdivisionFormComponent,
    AssigmentFormComponent,
    EmployeeConstructorComponent,
    AssigmentConstructorComponent,
    SubdivisionConstructorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
