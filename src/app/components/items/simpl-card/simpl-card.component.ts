import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpl-card',
  templateUrl: './simpl-card.component.html',
  styleUrls: ['./simpl-card.component.css']
})
export class SimplCardComponent implements OnInit {
  @Input() star: any;
  constructor() { }

  ngOnInit(): void {
  }

}
