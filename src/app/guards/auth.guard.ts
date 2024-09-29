import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user/user.service";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(UserService);

  if (!service.isLoggedIn()){
    router.navigateByUrl('create-account')
    return false
  }
  return true;
};
