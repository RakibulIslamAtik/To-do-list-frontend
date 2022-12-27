//package com.employeemanager.springboot.web;

//import org.springframework.boot.SpringApplication;
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';//'./app.component';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent } from '../app.component';



//@ComponentScan(

//    value = "com.employeemanager.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SpringBootFirstWebApplication implements SomeInterface{}

export class WelcomeComponent implements OnInit {
  name = ''
  message: string = 'Some Welcome Message'
  welcomeMessageFromService!: string;
  // String message = "Some Welcome Message"

  // public SpringBootFirstWebApplication(){}

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }

  // void intit(){}
  ngOnInit() {
    this.message
    console.log(this.message)
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.handleErrorResponse(error)
    });
    // response => this.handleSuccessfulResponse(response),

    //console.log("Get Welcome Message");
    // console.log("last line of getWelcomeMessage");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.handleErrorResponse(error)
    });
    // response => this.handleSuccessfulResponse(response),

    console.log("Get Welcome Message with parameter");
    // console.log("last line of getWelcomeMessage");
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: HttpErrorResponse) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;

  }

  

} 
