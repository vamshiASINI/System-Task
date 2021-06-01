import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
path:'',component:LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },{
    path:"list",
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },

  {
    path: "feedback",
    loadChildren:()=>import('./feedback/feedback.module').then(m => m.FeedbackModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
