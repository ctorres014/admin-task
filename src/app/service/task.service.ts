import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  planned: Array<any> = [
    {
      id: 1,
      name: 'Make plans for the vacations',
      description: 'Define what place, what price and type of travel',
      timeStimated: 12,
      state: 'Planned',
      active: true
    },
    {
      id: 2,
      name: 'Make purchases in the supermarket',
      description: 'Define what I need for at dinner',
      timeStimated: 8,
      state: 'Planned',
      active: true
    },
    {
      id: 3,
      name: 'Walk with the dog',
      description: 'Walk with the dog all the day, 2 twice perday',
      timeStimated: 4,
      state: 'Planned',
      active: true
    },
    {
      id: 4,
      name: 'Make the task in house',
      description: 'Clear the bedroom, the kitchen and living room',
      timeStimated: 8,
      state: 'Planned',
      active: true
    }
  ];
  inProgress: Array<any> = [];
  completed: Array<any> = [];

  constructor() { }
}
