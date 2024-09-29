import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  accountForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  })

  constructor(private service: UserService, private router: Router) {
  }

  createAccount() {
    this.service.addUser(this.accountForm.value.name);
    this.router.navigateByUrl('');
  }
}
