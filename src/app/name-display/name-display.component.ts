import { Component, OnInit } from '@angular/core';

import { NameserviceService } from "../nameservice.service";

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  newName: string;

  constructor(private nameService:NameserviceService) { }

  ngOnInit(): void {
  }

  getName() { 
    this.newName = this.nameService.getName();
  }

}
