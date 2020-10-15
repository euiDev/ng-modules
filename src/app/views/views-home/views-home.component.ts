import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];
  items = [
    {
      imageUrl: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'A couch'
    },
    {
      imageUrl: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'A dresser'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
