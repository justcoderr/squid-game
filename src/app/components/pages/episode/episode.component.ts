import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  content:any
  constructor() {
    let data = new DataService();
    this.content = data.getEps();
   }

  ngOnInit(): void {
  }

}
