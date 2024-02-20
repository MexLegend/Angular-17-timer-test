import {
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { ITimer } from '../interfaces/timer.interface';
import { DialogService } from './dialog.service';

@Injectable({ providedIn: 'root' })
export class SignalsTimerService {
  private _timerIntervalId?: number;
  private readonly _timer: WritableSignal<number> = signal(0);
  private readonly _showTimer: WritableSignal<boolean> = signal(false);
  private readonly _dialogService = inject(DialogService);

  getTimer(): Signal<number> {
    return this._timer.asReadonly();
  }

  getShowTimer(): Signal<boolean> {
    return this._showTimer.asReadonly();
  }

  /**
   * Starts a timer.
   * @param isCountdown Indicates whether the timer is a countdown timer.
   * @param timerValue The initial value of the timer.
   */
  startTimer({ isCountdown, timerValue }: ITimer) {
    // Emits true to indicate that the timer is active.
    this._showTimer.set(true);

    // Sets the initial value of the timer
    this._timer.set(isCountdown ? timerValue : 0);

    // Sets up an interval to update the timer
    this._timerIntervalId = setInterval(() => {
      // Checks if the timer has reached its final value
      if (
        (isCountdown && this._timer() === 0) ||
        (!isCountdown && this._timer() === +timerValue)
      ) {
        // Stops the interval
        clearInterval(this._timerIntervalId);

        // Opens a dialog to confirm if the timer should be reset
        this._dialogService
          .open({
            title: 'Signals Timer Ended',
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
      this._timer.update((timer) => (isCountdown ? timer - 1 : timer + 1));
    }, 1000);
  }

  /**
   * Stops the timer.
   * It sets the show timer indicator to false,
   * resets the timer value to 0,
   * and clears the timer interval.
   */
  stopTimer() {
    this._showTimer.set(false);
    this._timer.set(0);
    clearInterval(this._timerIntervalId);
  }

  /**
   * Resets the timer with the provided properties.
   * @param timerProps The properties to initialize the timer with.
   * It sets the timer value to 0 and starts the timer again with the provided properties.
   */
  resetTimer(timerProps: ITimer) {
    this._timer.set(0);
    this.startTimer(timerProps);
  }
}
