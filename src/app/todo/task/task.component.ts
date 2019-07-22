import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  @Output() emit = new EventEmitter();
  
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  removeTaskByID(id) {
    this.taskService.deleteTask(id).subscribe( () => {
      this.emit.emit()
    });
  }

}
