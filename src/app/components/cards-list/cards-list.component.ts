import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor() { }
  projects  = [
    {
      "title":"Mountain",
      "image": "https://i.redd.it/b3esnz5ra34y.jpg",
      "description":"This is a short description one two three Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      "title":"IA",
      "image": "https://i.gifer.com/origin/86/867536d1390d47a35f0c0e29ed9aef0f.gif",
      "description":"This is a short description Lorem ipsum dolor, sit amet consectetur adipisicing elit. five six seven eight" ,
    },
    {
      "title":"Gif Project",
      "image": "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
      "description": "This is a short description one Lorem ipsum dolor, sit amet consectetur adipisicing elit. seven eight",
    },
    {
      "title":"Pizza Project",
      "image": "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif",
      "description": "This is a short description one two three Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    }

  ]
  ngOnInit(): void {
  }

}
