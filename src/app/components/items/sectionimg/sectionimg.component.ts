import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionimg',
  templateUrl: './sectionimg.component.html',
  styleUrls: ['./sectionimg.component.css']
})
export class SectionimgComponent implements OnInit {

  @Input() imglink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
