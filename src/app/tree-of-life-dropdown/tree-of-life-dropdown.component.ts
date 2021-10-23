import { Component, OnInit } from '@angular/core';
import {Model} from "../mocked-service/model";
import {MockService} from "../mocked-service/mock-service.service";
import {Kingdom} from "../mocked-service/model-kingdom";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'tree-of-life-dropdown',
  templateUrl: './tree-of-life-dropdown.component.html',
  styleUrls: ['./tree-of-life-dropdown.component.css']
})
export class TreeOfLifeDropdownComponent implements OnInit {
  models: Model[] = [];
  model: Model = {id: null, title: null};

  kingdoms: Kingdom[] = [];
  kingdom: Kingdom =  { id: null, description: null, phylum: null };

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.getModels();
    this.getKingdoms();
  }

  filterKingdoms(): void {
    this.getKingdoms();
    this.kingdoms = this.kingdoms.filter(kingdom => kingdom.id == this.model.id);
  }


  getKingdoms(): void {
    this.mockService.getKingdom()
      .subscribe(kingdoms => this.kingdoms = kingdoms);
  }

  getModels(): void {
    this.mockService.getModels()
      .subscribe(models => this.models = models);
  }
}
