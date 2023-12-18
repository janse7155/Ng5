import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { WrongRouteComponent } from './wrongroute/wrongroute.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, children: [
    { path: 'bob', component: BobComponent },
    { path: 'susan', component: SusanComponent }
  ]},
  { path: 'contact', component: ContactComponent },
  //Wrong Route
  {path: 'error404', component: WrongRouteComponent},
  {path: '**', redirectTo: '/error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
