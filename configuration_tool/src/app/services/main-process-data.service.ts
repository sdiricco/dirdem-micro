import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainProcessDataService {
  isPendingProcess: boolean;

  constructor() { }
}
