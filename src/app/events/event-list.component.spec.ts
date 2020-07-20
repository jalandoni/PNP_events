import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListsComponent } from './events-list.component';

describe('AddeventComponent', () => {
  let component: EventsListsComponent;
  let fixture: ComponentFixture<EventsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});