import { Component } from '@angular/core';
import { ContainerComponent } from '@components/container/container.component';
import { TimerConfigurationComponent } from '@components/timer-configuration/timer-configuration.component';
import { TimerComponent } from '@components/timer/timer.component';

@Component({
  selector: 'app-basic-timer',
  standalone: true,
  imports: [ContainerComponent, TimerConfigurationComponent, TimerComponent],
  templateUrl: './basic-timer.component.html',
  styleUrl: './basic-timer.component.scss',
})
export class BasicTimerComponent {}
