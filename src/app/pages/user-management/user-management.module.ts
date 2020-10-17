import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';


@NgModule({
  declarations: [UserListComponent, UserEditComponent, RoleListComponent, RoleEditComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    CoreModule
  ]
})
export class UserManagementModule { }
