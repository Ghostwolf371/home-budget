import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public  service: UserService, private router: Router) {
  }

  homePage() {
    if (this.service.isLoggedIn()){
      this.router.navigateByUrl('');
    }
  }
}
