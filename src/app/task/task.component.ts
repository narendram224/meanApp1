import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import{ TasksModel} from '../tasks'
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  displayedColumns: string[] = ['_id','title', 'isCompleted', 'created_at', 'updated_at'];
  dataSource :MatTableDataSource<TasksModel> ;
msg:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private taskService:TasksService) { }

  ngOnInit() {
    this.taskService.Tasks.subscribe(taskss=>{
      if(!taskss){return;}
      this.dataSource =new MatTableDataSource<TasksModel>(taskss);
      this.dataSource.paginator = this.paginator;
      console.log(taskss);
    })
    
  }
  updatedTask(task:TasksModel){
    this.taskService.changeStatus(task).subscribe(mesg=>{
      this.msg= mesg;

      console.log("element"+task.isCompleted);
    })

  }
}

