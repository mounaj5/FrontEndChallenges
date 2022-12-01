import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  stars:number[]=[1,2,3,4,5];
  hover=0;
  rating=3;

  constructor() { }

  ngOnInit(): void {
  }

  rate(s:number)
  {
  this.rating=s;
  }

  hoverState(s:number)
  {
  this.hover=s;
  }

  resetHoverState()
  {
  this.hover=0;
  }

}
