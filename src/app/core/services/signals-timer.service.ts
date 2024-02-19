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

  startTimer({ isCountdown, timerValue }: ITimer) {
    this._showTimer.set(true);
    this._timer.set(isCountdown ? timerValue : 0);
    this._timerIntervalId = setInterval(() => {
      if (
        (isCountdown && this._timer() === 0) ||
        (!isCountdown && this._timer() === +timerValue)
      ) {
        clearInterval(this._timerIntervalId);
        this._dialogService.open({
          title: 'Sinals Timer Ended',
          timer: timerValue,
          description: 'Would you like to reset the timer?',
        });
        return;
      }
      this._timer.update((timer) => (isCountdown ? timer - 1 : timer + 1));
    }, 1000);
  }

  stopTimer() {
    this._showTimer.set(false);
    this._timer.set(0);
    clearInterval(this._timerIntervalId);
  }
}
