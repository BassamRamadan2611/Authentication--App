import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
constructor(private authServive:AuthService){}

  ForgotPassword(pass:any){
this.authServive.ForgotPassword(pass)
  }
}
