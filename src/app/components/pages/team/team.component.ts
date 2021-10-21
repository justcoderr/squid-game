import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  stars:any
  constructor() {
    let data = new DataService();
    this.stars = data.getTeams();
   }

  ngOnInit(): void {
  }

}
