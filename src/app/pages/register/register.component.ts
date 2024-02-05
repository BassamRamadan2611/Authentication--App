import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService:AuthService){

  }

    onSignUp(form:NgForm){
  console.log(form.value)
  this.authService.SignUp(form.value.email,form.value.password)
    }
}
