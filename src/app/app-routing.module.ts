import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ATMSimulatorComponent } from './user/atmsimulator/atmsimulator.component';


const routes: Routes = [
   {path:'header',component:HeaderComponent},
  {path:'userhome',component:UserHomeComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'atmsimulator',component:ATMSimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
