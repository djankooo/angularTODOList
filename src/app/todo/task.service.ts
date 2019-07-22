import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  getTaskList(){
    return this.http.get(this.apiUrl + "/tasks")
  }

  deleteTask(id){
    return this.http.delete(this.apiUrl + "/tasks/" + id);
  }
}
