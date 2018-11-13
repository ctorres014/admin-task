import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newTaskForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }
  addTask() {
    
  }

  private createForm() {
    this.newTaskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      stimatedTime: new FormControl('', [Validators.required])
    });
  }
}
