import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-infowow',
  templateUrl: './infowow.component.html',
  styleUrls: ['./infowow.component.css']
})
export class InfowowComponent implements OnInit {
content :any
  constructor() {
    let data = new DataService();
    this.content = data.getInfoWow();
   }

  ngOnInit(): void {
  }

}
