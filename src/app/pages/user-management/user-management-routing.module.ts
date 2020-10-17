import { RoleListComponent } from './role/role-list/role-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'roles',
    component: RoleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
