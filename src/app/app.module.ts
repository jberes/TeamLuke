import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxAvatarModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule,
    IgxGridModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
