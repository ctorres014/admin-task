import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  stateList: Array<any> = [
    {
      name: 'Make plans for the vacations',
      description: 'Define what place, what price and type of travel',
      timeStimate: '12',
      state: 'Planned'
    },
    {
      name: 'Make purchases in the supermarket',
      description: 'Define what I need for at dinner',
      timeStimate: '8',
      state: 'Planned'
    },
    {
      name: 'Walk with the dog',
      description: 'Walk with the dog all the day, 2 twice perday',
      timeStimate: '4',
      state: 'Planned'
    },
    {
      name: 'Make the task in house',
      description: 'Clear the bedroom, the kitchen and living room',
      timeStimate: '8',
      state: 'Planned'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
