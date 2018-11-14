import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../../../service/task.service';
import { StateEnum } from '../../../enum/states.enum';

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
      let previus: any = event.previousContainer.data[event.currentIndex];
      if(previus.state === StateEnum.Planned) {
        this.sumHourPlanned -=  this._taskService.planned[event.currentIndex].timeStimated;
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this._taskService.inProgress[event.currentIndex].state = StateEnum.InProgress;
      this.sumHourInProgress = this.sumTotalHourByState(this._taskService.inProgress);
      if(this.sumHourCompleted > 0) {
        this.sumHourCompleted -= this._taskService.inProgress[event.currentIndex].timeStimated;
      }

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
      this._taskService.completed[event.currentIndex].state = StateEnum.Completed;
      this.sumHourCompleted = this.sumTotalHourByState(this._taskService.completed);
      this.sumHourInProgress -=  this._taskService.completed[event.currentIndex].timeStimated;
    }
  }
  
  ///////////////////////////////////////////
  /// Sum the time stimate for array object
  ///////////////////////////////////////////
  private sumTotalHourByState(arrayObject: any): number {
    let sum: number = 0;
    for(const item of arrayObject) {
      if(item.active) {
        sum += item.timeStimated;
      }
    }
    return sum;
  }

}
