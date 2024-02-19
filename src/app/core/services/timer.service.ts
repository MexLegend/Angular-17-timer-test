import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval } from 'rxjs';
import { ITimer } from '../interfaces/timer.interface';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private readonly _timerSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private readonly _showTimer: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private _timerSubscription: Subscription | undefined;

  getTimer(): Observable<number> {
    return this._timerSubject.asObservable();
  }

  getShowTimer(): Observable<boolean> {
    return this._showTimer.asObservable();
  }

  startTimer({ isCountdown, timerValue }: ITimer) {
    this._showTimer.next(true);
    let counter = isCountdown ? timerValue : 0;
    this._timerSubscription = interval(1000).subscribe(() => {
      if (
        (isCountdown && counter === 0) ||
        (!isCountdown && counter === timerValue)
      ) {
        this._timerSubscription?.unsubscribe();
        return;
      }
      isCountdown ? counter-- : counter++;
      this._timerSubject.next(counter);
    });
  }

  stopTimer() {
    this._showTimer.next(false);
    this._timerSubject.next(0);
    this._timerSubscription?.unsubscribe();
  }
}
