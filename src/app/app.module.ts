import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListsComponent } from './events/events-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { AddeventComponent } from './addevent/addevent.component';
import { Services } from './Services/services'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    EventsListsComponent,
    EventDetailsComponent,
    ParticipantsListComponent,
    AddeventComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule

  ],
  providers: [
    Services,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
