import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  getUserLoggedIn() {
    return this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
