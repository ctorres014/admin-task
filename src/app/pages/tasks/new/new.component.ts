import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Service
import { TaskService } from '../../../service/task.service';
// Model
import { TaskModel } from '../../../models/task.model';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newTaskForm: FormGroup;
  task: TaskModel;
  constructor(private _serviceTask: TaskService,
              private _router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }
  addTask() {
    let lastId = this._serviceTask.planned.length + 1;
    this.task = new TaskModel(lastId,
                              this.newTaskForm.controls['name'].value,
                              this.newTaskForm.controls['description'].value,
                              this.newTaskForm.controls['timeStimated'].value,
                              'Planned',
                              true);
    this._serviceTask.planned.push(this.task);
    this._router.navigate(['/listtask']);
  }

  private createForm() {
    this.newTaskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      timeStimated: new FormControl('', [Validators.required,
                                        Validators.pattern('^(0|[1-9][0-9]*)$')])
    });
  }
}
