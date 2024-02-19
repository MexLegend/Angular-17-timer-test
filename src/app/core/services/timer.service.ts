import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {

  private readonly _timerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly _showTimer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _timerSubscription: Subscription | undefined;

  getTimer(): Observable<number> {
    return this._timerSubject.asObservable();
  }

  getShowTimer(): Observable<boolean> {
    return this._showTimer.asObservable();
  }

  startTimer() {
    this._showTimer.next(true);
    let counter = 0;
    this._timerSubscription = interval(1000).subscribe(() => {
      counter++;
      this._timerSubject.next(counter);
    });
  }

  stopTimer() {
    this._showTimer.next(false);
    this._timerSubscription?.unsubscribe();
  }
}
