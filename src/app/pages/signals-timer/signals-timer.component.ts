import { Component } from '@angular/core';
import { ContainerComponent } from '@components/container/container.component';
import { TimerConfigurationWithSignalsComponent } from '@components/timer-configuration-with-signals/timer-configuration-with-signals.component';
import { TimerWithSignalsComponent } from '@components/timer-with-signals/timer-with-signals.component';

@Component({
  selector: 'app-signals-timer',
  standalone: true,
  imports: [
    ContainerComponent,
    TimerConfigurationWithSignalsComponent,
    TimerWithSignalsComponent,
  ],
  templateUrl: './signals-timer.component.html',
  styleUrl: './signals-timer.component.scss',
})
export class SignalsTimerComponent {}
