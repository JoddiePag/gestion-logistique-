import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  user: object=null

  constructor(){}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(){
   
  }
}
