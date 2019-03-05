import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  tweets = [
     {
      created_at: 'Wed Apr 05 12:30:12 +0000 2017',
      id: 1,
      like: 0,
      text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
      user: 'James Braddock'
    },
    {
      created_at: 'Thu Apr 06 15:24:15 +0000 2017',
      id: 2,
      like: 2,
      text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
      user: 'Bob kelso'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSave(value){
  	this.tweets.push(
  		{	
	      created_at: new Date().toDateString(),
	      id: this.tweets.length + 1,
	      like: 0,
	      text: value,
	      user: 'Yvann'
  		}
  	)
  }  

  likeTweet(tweet){
  	tweet.like = tweet.like + 1;
  }

}
