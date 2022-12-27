import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
    
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[];
  // = [
  //   new Todo(1, 'Learn To Be A Great Lover', false, new Date()),
  //   new Todo(2, 'Become An Expert At Java Spring Boot & Angular', false, new Date()),
  //   new Todo(3, 'Visit Bangladesh', false, new Date())
    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become be an expert at Angular'},
    // {id: 3, description: 'Visit Bangladesh'}
  // ]

  // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // }

  constructor(
    private TodoService:TodoDataService
  ) { }

  ngOnInit(): void {
    this.TodoService.retriveAllTodos('atik').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
