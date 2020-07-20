import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant } from "../Services/data_models";
import { Services } from "../Services/services";
import { Subscription } from "rxjs";
import {Router}  from '@angular/router'


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListsComponent implements OnInit, OnDestroy {
  events: Event[];
  event: any;
  getEventSubcribe: Subscription

  constructor(private eventService: Services,
    private router: Router
    ) { }

  ngOnInit() {
    this.getEventSubcribe = this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

  ngOnDestroy() {
    this.getEventSubcribe.unsubscribe()
  }


  addEvent(event: Event) {
    this.eventService.addEvent(event)
  }


  logout(){
    this.eventService.updateCurrentUser({
      userName:'',
      password: ''
    })
    this.router.navigate(['/login'])
  }

  viewEvent(event: Event){
      this.router.navigate(['/events',event.id])
  }

}




