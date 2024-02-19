import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITimer } from '../interfaces/timer.interface';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private _timerIntervalId?: number;
  private readonly _timerSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private readonly _showTimer: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private readonly _dialogService = inject(DialogService);

  getTimer(): Observable<number> {
    return this._timerSubject.asObservable();
  }

  getShowTimer(): Observable<boolean> {
    return this._showTimer.asObservable();
  }

  startTimer({ isCountdown, timerValue }: ITimer) {
    this._showTimer.next(true);
    let counter = isCountdown ? timerValue : 0;
    this._timerSubject.next(counter);

    this._timerIntervalId = setInterval(() => {
      if (
        (isCountdown && counter === 0) ||
        (!isCountdown && counter === +timerValue)
      ) {
        clearInterval(this._timerIntervalId);
        this._dialogService.open({
          title: 'Basic Timer Ended',
          timer: timerValue,
          description: 'Would you like to reset the timer?',
        });
        return;
      }
      isCountdown ? counter-- : counter++;
      this._timerSubject.next(counter);
    }, 1000);
  }

  stopTimer() {
    this._showTimer.next(false);
    this._timerSubject.next(0);
    clearInterval(this._timerIntervalId);
  }
}
