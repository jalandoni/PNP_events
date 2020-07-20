import { Component, OnInit } from '@angular/core';
import { userAccount } from '../Services/data_models';
import { Router } from '@angular/router'
import {Services} from '../Services/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userName;
  password;
  currentAccount: userAccount = {
    userName: 'admin',
    password: 'admin'
  }

  constructor(
    private router: Router,
    private eventService :Services
  ) { }

  ngOnInit(): void {
    // this.eventService.currentUserAccount.subscribe(currentUser =>{
    //   console.log(currentUser);
    // })
  }

  login(userAccount: userAccount) {
    if (userAccount.userName === this.currentAccount.userName && userAccount.password === this.currentAccount.password){
      console.log('authorized!')
      this.eventService.updateCurrentUser(userAccount);
      this.router.navigate(['/events'])
      }
      else {
      console.log('unauthorized!')
    }

  }



}
