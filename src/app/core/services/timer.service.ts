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

  /**
   * Starts a timer.
   * @param isCountdown Indicates whether the timer is a countdown timer.
   * @param timerValue The initial value of the timer.
   */
  startTimer({ isCountdown, timerValue }: ITimer) {
    // Emits true to indicate that the timer is active.
    this._showTimer.next(true);

    // Sets the initial value of the timer.
    let counter = isCountdown ? timerValue : 0;
    this._timerSubject.next(counter);

    // Sets up an interval to update the timer
    this._timerIntervalId = setInterval(() => {
      // Checks if the timer has reached its final value
      if (
        (isCountdown && counter === 0) ||
        (!isCountdown && counter === +timerValue)
      ) {
        // Stops the interval
        clearInterval(this._timerIntervalId);

        // Opens a dialog to confirm if the timer should be reset
        this._dialogService
          .open({
            title: 'Basic Timer Ended',
            timer: timerValue,
            description: 'Would you like to reset the timer?',
          })
          .subscribe((confirmed) => {
            // If confirmed, resets the timer
            if (confirmed) this.resetTimer({ isCountdown, timerValue });
          });
        return;
      }
      // Updates the timer value based on whether it's a countdown or count-up timer.
      isCountdown ? counter-- : counter++;
      this._timerSubject.next(counter);
    }, 1000);
  }

  /**
   * Stops the timer.
   * It sets the show timer indicator to false,
   * resets the timer value to 0,
   * and clears the timer interval.
   */
  stopTimer() {
    this._showTimer.next(false);
    this._timerSubject.next(0);
    clearInterval(this._timerIntervalId);
  }

  /**
   * Resets the timer with the provided properties.
   * @param timerProps The properties to initialize the timer with.
   * It sets the timer value to 0 and starts the timer again with the provided properties.
   */
  resetTimer(timerProps: ITimer) {
    this._timerSubject.next(0);
    this.startTimer(timerProps);
  }
}
