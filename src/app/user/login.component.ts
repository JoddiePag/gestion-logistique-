import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string=""
  public password: string=""

  public message = {
    "status": null,
    "message": null
  }

  constructor() { }

  ngOnInit(): void {
  }

  loginSubmit(){
    if(this.email.length == 0  || this.password.length == 0){
      alert('Veuillez compléter le formulaire.');
      return false;
    }

  
    
  }

}
