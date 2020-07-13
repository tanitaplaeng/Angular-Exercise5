import { Component, OnInit } from '@angular/core';
import { NameserviceService } from '../nameservice.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  newName: string;

  constructor(private nameServices:NameserviceService) { }

  ngOnInit() {
  }

  setName(){
    this.nameServices.setName(this.newName);
  }

}