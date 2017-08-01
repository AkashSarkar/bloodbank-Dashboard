import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AuthGuard } from "./auth.guard";
import { DataServiceService } from "./data-service.service";
import { DeleteComponent } from './delete/delete.component';
const appRoutes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent
  },
  {
    path:'delete',
    canActivate:[AuthGuard],
    component:DeleteComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
