import { Component, OnDestroy, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { TimerPipe } from 'app/core/pipes/timer.pipe';
import { TimerService } from 'app/core/services/timer.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [ButtonComponent, AsyncPipe, DatePipe, TimerPipe, NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnDestroy {
  showTimer!: Observable<boolean>;
  readonly timer$?: Observable<number>;

  private readonly _timerService = inject(TimerService);

  constructor() {
    this.showTimer = this._timerService.getShowTimer();
    this.timer$ = this._timerService.getTimer();
  }

  ngOnDestroy(): void {
    this._timerService.stopTimer();
  }

  stopTimer() {
    this._timerService.stopTimer();
  }
}
