import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksModel } from '../tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

get Tasks():Observable<TasksModel[]>{
  return this.http.get<TasksModel[]>('http://localhost:3000/api/task');
  
}

changeStatus(task:TasksModel):Observable<TasksModel>{
  console.log("servide task:"+task.isCompleted);
  task.isCompleted = task.isCompleted === true?false : true;
  console.log("servide after task:"+task.isCompleted);
  return this.http.put<TasksModel>(`http://localhost:3000/api/task/${task._id}`,task)

}
}
