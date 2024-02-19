import { Component } from '@angular/core';
import { ContainerComponent } from 'app/components/container/container.component';
import { TimerConfigurationComponent } from 'app/components/timer-configuration/timer-configuration.component';
import { TimerComponent } from 'app/components/timer/timer.component';

@Component({
  selector: 'app-basic-timer',
  standalone: true,
  imports: [ContainerComponent, TimerConfigurationComponent, TimerComponent],
  templateUrl: './basic-timer.component.html',
  styleUrl: './basic-timer.component.scss',
})
export class BasicTimerComponent {}
