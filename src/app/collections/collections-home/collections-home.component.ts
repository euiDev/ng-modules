import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Johnny', age: 24, job: 'Astronaut', employed: true },
    { name: 'Riley', age: 18, job: 'Masseuse', employed: false },
    { name: 'Lana', age: 23, job: 'Detective', employed: true }
  ];
  headers = [
    { key: 'employed', label: 'Has a job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
