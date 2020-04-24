import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _status = new BehaviorSubject<ProcessStatus>(ProcessStatus.complete);
  processStatus = this._status.asObservable();

  /**
   * Aggiorna lo stato di un processo - pending o completato
   */
  updateProcess(status: ProcessStatus) {
    this._status.next(status);
  }

  constructor() { }
}

export enum ProcessStatus {
  pending,
  complete
}
