import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isProgressVisible: boolean;
  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, public afAuth: AngularFireAuth) {

      this.isProgressVisible = false;

      this.loginForm = new FormGroup({
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required)
      });

      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/home']);
      }
  }

  loginUser(data: User) {
      this.isProgressVisible = true;                          // show the progress indicator as we start the Firebase login process

      if (this.loginForm.invalid)
          return;

      this.authService.loginUser(data).then((result) => {
          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
          if (result == null) {                               // null is success, false means there was an error
              console.log('logging in...');
              this.router.navigate(['/dashboard']);                // when the user is logged in, navigate them to dashboard
          }
          else if (result.isValid == false) {
              console.log('login error', result);
              this.firebaseErrorMessage = result.message;
          }
      });
  }
}