import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event, Participant} from "./../../Services/data_models"
import { Services } from "./../../Services/services";


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  constructor(
    private route :ActivatedRoute,
    private eventService : Services,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.eventService.getEvent(this.route.snapshot.params.id)
    .then(event => this.event = event as Event);
    
  }

  viewList(){
    this.router.navigate(['/events']);
  }

  addParticipants(participant:Participant){
    this.event.participants.push(participant);
    this.eventService.updateEvent(this.event)
  }

}
