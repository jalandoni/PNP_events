import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  // @Input() event: any
  @Input() participants: any;
  @Output() backEvent = new EventEmitter();
  @Output() addParticipant = new EventEmitter();
  fullName;
  position;
  company;

  constructor() { }

  ngOnInit(): void {
  }

  returnToTable() {
    this.backEvent.emit();
  }
  register(data) {
    this.addParticipant.emit(data);
    this.fullName = '';
    this.position = '';
    this.company = '';
  }

}
