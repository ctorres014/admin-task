import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {
  sumHourPlanned: number;
  sumHourInProgress: number;
  sumHourCompleted: number;

  constructor(private _taskService: TaskService) {
    this.sumHourPlanned = this.sumTotalHourByState(this._taskService.planned);
    this.sumHourInProgress = this.sumTotalHourByState(this._taskService.inProgress);
    this.sumHourCompleted = this.sumTotalHourByState(this._taskService.completed);
  }


  ngOnInit() {
  }
  dropInProgress(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }
  dropCompleted(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  ///////////////////////////////////////////
  /// Sum the time stimate for array object
  ///////////////////////////////////////////
  private sumTotalHourByState(arrayObject: any): number {
    let sum: number = 0;
    for(const item of arrayObject) {
      if(item.active) {
        sum += item.timeStimate;
      }
    }
    return sum;
  }

}
