import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
})
export class ToggleSwitchComponent {
  private readonly router = inject(Router);

  get isSignalsTimerRouteActive() {
    return this.router.url.includes('signals-timer');
  }

  toogleRoute(event: MouseEvent) {
    event.preventDefault();

    this.router.url.includes('signals-timer')
      ? this.router.navigateByUrl('basic-timer')
      : this.router.navigateByUrl('signals-timer');
  }
}
