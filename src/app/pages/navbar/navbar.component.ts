import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  toggle(){
    document.querySelector(".menu-setting").classList.toggle("hidden");
  }
  toggle2(){
    document.querySelector("#mobile-menu").classList.toggle("hidden");
  }

}
