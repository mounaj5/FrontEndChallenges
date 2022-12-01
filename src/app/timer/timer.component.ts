import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time={hrs:0,min:0,sec:0}
  timerID:any;
  counting=false;

  constructor() { }

  ngOnInit(): void { }

  startTimer()
  {
  var parent=this;
  this.timerID = setInterval( function(){
  parent.calc();
  parent.counting=true;
  },1000);
  }

  calc()
  {
  this.time.sec+=1;
  if(this.time.sec>=60)
  {
  this.time.min+=1;
  this.time.sec=0;
  }

  if(this.time.min>=60)
  {
  this.time.hrs+=1;
  this.time.min=0;
  }
  }


  pauseTimer(){
  clearInterval(this.timerID);
  this.counting=false;
  }

  stopTimer(){
  clearInterval(this.timerID);
  this.time.hrs=0;
  this.time.min=0;
  this.time.sec=0;
  this.counting=false;
  }
}
