import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {
  todo: Array<any> = [
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

  done: Array<any> = [];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
