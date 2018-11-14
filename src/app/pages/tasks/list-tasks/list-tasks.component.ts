import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task.service';
import { StateEnum } from 'src/app/enum/states.enum';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  allTasks: Array<any> = [ ];

  constructor(private _taskService: TaskService) {
    this.getAllTask(this._taskService.planned);
    this.getAllTask(this._taskService.inProgress);
    this.getAllTask(this._taskService.completed);
  }

  ngOnInit() {
  }
  action(item: any) {
    debugger;
    switch (item.state) {
      case StateEnum.Planned:
        let planned = this._taskService.planned.find(x => x.id === item.id);
        planned.active = !item.active;
        break;
      case StateEnum.InProgress:
        let inProgress = this._taskService.inProgress.find(x => x.id === item.id);        
        inProgress.active = !item.active;
      break;
      case StateEnum.Completed:
        let completed = this._taskService.completed.find(x => x.id === item.id);
        completed.active = !item.active;
      break;
      default:
        break;
    }
  }

  private getAllTask(arrayObject: Array<any>) {
    for (const item of arrayObject) {
      this.allTasks.push(item);
    }
  }


}
