import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  width:number=0;
  progress:number=0;
  time=7000;
  interval:any;
  loading:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  play(){
  var p=this;
  this.interval = setInterval(function(){
  p.progress+=100;
  p.width=(p.progress/7000) * 100;
  },100);

  this.loading=true;

    setTimeout(()=>{
    clearInterval(p.interval);
    },p.time)
  }

  pause(){
    clearInterval(this.interval);
    this.loading=false;
  }

  stop(){
    clearInterval(this.interval);
    this.progress=0;
    this.width=0;
    this.loading=false;
  }

}
