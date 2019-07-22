import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'ListComponentName';

  tasks;

  constructor(private api: TaskService) {
  }

  getTaskList() {
    this.api.getTaskList().subscribe((data) => {
      this.tasks = data;
    });
  }

  ngOnInit() {
    this.getTaskList();
  }

}
