import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { OrderChartComponent } from './dashboard/order-chart/order-chart.component';
import { UsersStatComponent } from './dashboard/users-stat/users-stat.component';
import { OrderPrescStatComponent } from './dashboard/order-presc-stat/order-presc-stat.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { PrimaryHeaderComponent } from './template/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './template/secondary-header/secondary-header.component';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, SettingsComponent, OrderChartComponent, UsersStatComponent, OrderPrescStatComponent, ActivityComponent, PrimaryHeaderComponent, SecondaryHeaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ]
})
export class PagesModule { }
