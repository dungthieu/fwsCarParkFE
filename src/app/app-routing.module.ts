import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './component/hrm/base/base.component';
import { BaseManagementComponent } from './component/management/base-management/base-management.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:"login", pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-hrm',
    component: BaseComponent,
    loadChildren: () => import("./component/hrm/base/base.module")
      .then(response => response.BaseModule)
  },

  {
    path: 'carpark-manager',
    component: BaseManagementComponent,
    loadChildren: () => import("./component/management/base-management/base-management.module")
      .then(response => response.BaseManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
