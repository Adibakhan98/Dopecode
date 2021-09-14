import { Component, OnInit,AfterViewInit  } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-home-middle',
  templateUrl: './home-middle.component.html',
  styleUrls: ['./home-middle.component.css']
})
export class HomeMiddleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 ngAfterViewInit(): void {
 
anime.timeline({loop: true})
  .add({
    targets: '.c2 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.c2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  }
  

}
