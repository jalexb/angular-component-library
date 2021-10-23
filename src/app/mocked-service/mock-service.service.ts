import { Injectable } from '@angular/core';
import { Model } from './model';
import { MODELS } from "./mock-model";
import { Observable, of} from 'rxjs';
import {Kingdom} from "./model-kingdom";
import {KINGDOMS} from "./mock-model-kingdoms";



@Injectable({
  providedIn: 'root'
})

export class MockService {
  getModels(): Observable<Model[]> {
    const models = of(MODELS);
    return models;
  };

  getKingdom(): Observable<Kingdom[]> {
    const kingdoms = of(KINGDOMS);
    return kingdoms;
  }

  constructor() { }
}
