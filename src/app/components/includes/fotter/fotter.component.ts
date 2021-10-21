import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {

  paragraph = "Copyright © 2021 by abdeljabar elhajji";
  urls = [
    { link: "https://web.facebook.com/elhajji.abdeljabar/", text: '', icon: "fab fa-facebook" },
    { link: "https://www.instagram.com/_im_abdel/", text: '', icon: "fab fa-instagram" },
    { link: "https://twitter.com/SomeAbdeu", text: '', icon: "fab fa-twitter" },
    { link: "https://www.linkedin.com/in/abdeljabar-elhajji/", text: '', icon: "fab fa-linkedin" },
    { link: "https://github.com/aelhajji", text: '', icon: "fab fa-github" },
    { link: "https://aelhajji.github.io", text: '', icon: "fas fa-globe-africa" }, //you can use icon 
    // { link: "https://google.com", text: 'google', icon: "" }, // or using text 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
