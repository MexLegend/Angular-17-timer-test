import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  Signal,
  inject,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { TimerPipe } from 'app/core/pipes/timer.pipe';
import { SignalsTimerService } from 'app/core/services/signals-timer.service';

@Component({
  selector: 'app-timer-with-signals',
  standalone: true,
  imports: [ButtonComponent, AsyncPipe, DatePipe, TimerPipe, NgIf],
  templateUrl: './timer-with-signals.component.html',
  styleUrl: './timer-with-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerWithSignalsComponent implements OnDestroy {
  readonly showTimer!: Signal<boolean>;
  readonly timer: Signal<number>;

  private readonly _timerService = inject(SignalsTimerService);

  constructor() {
    this.showTimer = this._timerService.getShowTimer();
    this.timer = this._timerService.getTimer();
  }

  ngOnDestroy(): void {
    this._timerService.stopTimer();
  }

  stopTimer() {
    this._timerService.stopTimer();
  }
}
