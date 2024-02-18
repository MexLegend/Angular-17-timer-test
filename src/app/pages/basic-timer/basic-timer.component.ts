import { Component } from '@angular/core';
import { ButtonComponent } from 'app/components/button/button.component';
import { ContainerComponent } from 'app/components/container/container.component';

@Component({
  selector: 'app-basic-timer',
  standalone: true,
  imports: [ContainerComponent, ButtonComponent],
  templateUrl: './basic-timer.component.html',
  styleUrl: './basic-timer.component.scss',
})
export class BasicTimerComponent {}
