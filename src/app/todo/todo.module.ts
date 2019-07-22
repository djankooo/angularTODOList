import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TaskService} from './task.service';


@NgModule({
  providers: [TaskService],
  declarations: [ListComponent, TaskComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
  ]
})
export class TodoModule { }
