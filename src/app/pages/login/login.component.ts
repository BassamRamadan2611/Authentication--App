import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private authService:AuthService,private toastr: ToastrService){

}


  onSignin(form:NgForm){
    console.log(form.value)
    const email  =  form.value.email
    const password = form.value.password
this.authService.SignIn(email,password)
console.log(this.authService.isLoggedIn)
  }

  signWithGoogle(){
    this.authService.GoogleAuth()
  }
}
