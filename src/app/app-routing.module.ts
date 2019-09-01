import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from '../app/home-child/home-child.component';
import { MainPageDetailsComponent } from '../app/main-page-details/main-page-details.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home-child', component: HomeChildComponent},
  {path: 'product', component: MainPageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
