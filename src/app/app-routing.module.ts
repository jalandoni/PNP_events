import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { EventsListsComponent } from './events/events-list.component';
import { EventsRouteActivator } from "./Services/event-route-activator.service";
import { EventDetailsComponent } from './event/event-details/event-details.component';


const routes: Routes = [
  {path : 'login' , component: LoginComponent, pathMatch:'full' },
  {path : 'events/:id' , component: EventDetailsComponent, canActivate:[EventsRouteActivator]},
  {path : 'events' , component: EventsListsComponent, canActivate:[EventsRouteActivator]},
  {path : '' , redirectTo: '/login', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
