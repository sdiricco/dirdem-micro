import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  visibility$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { console.log('loader service started') };

  show() {
    this.visibility$.next(true);
  }

  hide() {
    this.visibility$.next(false);
  }

  isVisible(): Observable<boolean> {
    return this.visibility$.asObservable().pipe(share());
  }

}

