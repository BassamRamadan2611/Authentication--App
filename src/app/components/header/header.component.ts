import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private i: number = 0;
  private text: string = " Software Developer | Front-End Web Developer | Web Desiger";
  private timer: number = 50;
   typewriter_text: string = "Front-End Web Developer | Angular Developer";
   classToggled:boolean = false;
   typewriter_display: string = "";
  constructor(@Inject(DOCUMENT) private document: Document){
    this.typingCallback(this)
  }
/*
  typeWriter() {

    console.log(this.text.length);
    console.log(this.text[0]);
    console.log(this.i);
    const element:any = document.querySelector(".typing-text")
    if (this.i < this.text.length) {

      element.innerHTML += this.text[this.i];
      this.i++;

      setTimeout(this.typeWriter.bind(this), this.timer);
    }


  }
  */
  toggleSettings(){

    const menu = window.document.querySelector('#menu')
     const navbar =window.document.querySelector('.navbar')
console.log(menu)
menu?.classList.add("rotate")
    this.classToggled = !this.classToggled;
  }
  resetToggle(){
    this.classToggled = false
  }
  typingCallback(that:any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 50, that);
    }
  }
  ngOnInit(): void {
//this.typeWriter()

  this.typingCallback(this)



}
}
