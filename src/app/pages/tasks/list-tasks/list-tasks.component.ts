import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// Rxjs
// import { Observable } from 'rxjs';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  allTasks: Array<any> = [ ];
  
  constructor(private _taskService: TaskService) {
    this.getAllTask(this._taskService.planned);
  }

  ngOnInit() {
  }
  delete(id: any) {

  }
  active(id: any) {
    
  }



  private getAllTask(arrayObject: Array<any>) {
    for (const item of arrayObject) {
      this.allTasks.push(item);
    }
  }


}
