import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviews:any
  constructor() {
    let data = new DataService();
    this.reviews = data.getReviews();
   }

  ngOnInit(): void {
  }

}
