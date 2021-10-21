import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = true;
  logoitems = { link: "/", image: [{ img: "assets/imges/logo2.png", width: "30" }, { img: "assets/imges/logo.png", width: "100" }] }
  links = [
    { link: "/", text: "الرئيسية" },
    { link: "personnages", text: "الشخصيات" },
    { link: "episode", text: "الحلقات" },
    { link: "infowow", text: "الحبكة في المسلسل" },
    { link: "reviews", text: "مراجعات" },
    { link: "team", text: "الطاقم" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showhidNav() {
    this.show = !this.show
    // console.log(this.show)
  }
}
