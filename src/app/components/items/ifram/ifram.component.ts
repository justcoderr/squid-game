import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifram',
  templateUrl: './ifram.component.html',
  styleUrls: ['./ifram.component.css']
})
export class IframComponent implements OnInit {

  @Input() iframsrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
