import { FormControl } from '@angular/forms';

export interface ITimerForm {
  timerValue: FormControl<number>;
  isCountdown: FormControl<boolean>;
}

export interface ITimer {
  timerValue: number;
  isCountdown: boolean;
}