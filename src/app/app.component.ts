import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components//navbar/navbar.component';
import { ContainerComponent } from '@components//container/container.component';
import { ButtonComponent } from '@components//button/button.component';
import { ToggleSwitchComponent } from '@components//toggle-switch/toggle-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ContainerComponent,
    ButtonComponent,
    ToggleSwitchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-timer-test';
  
}
