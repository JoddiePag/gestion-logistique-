import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public classe: string=""
  public materiel: string=""
  public date: string=""
  


  public message = {
    "status": null,
    "message": null
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.classe.length == 0  || this.materiel.length == 0  || this.date.length == 0 ){
      alert('Veuillez compléter le formulaire.');
      return false;
    }

 
    


    
      
        
  }

}
