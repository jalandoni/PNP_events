import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Services } from './services';


@Injectable({
    providedIn: 'root'
})
export class EventsRouteActivator implements CanActivate {

    constructor(
        private router: Router,
        private Services: Services
    ) { }
    canActivate() {
        let isLoggedIn: boolean;
        if (this.Services.userAccount.value.userName === '' && this.Services.userAccount.value.password === '') {
            isLoggedIn = false;
            this.router.navigate(['/login']);
        } else {
            isLoggedIn = true;
        }
        return isLoggedIn;

    }
}

