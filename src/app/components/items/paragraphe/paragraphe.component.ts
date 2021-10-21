import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraphe',
  templateUrl: './paragraphe.component.html',
  styleUrls: ['./paragraphe.component.css']
})
export class ParagrapheComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
