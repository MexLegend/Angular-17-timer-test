import { NgIf } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { ThemeService, ThemeType } from 'app/core/services/theme.service';
import { MoonIconComponent } from 'app/icons/moon-icon.component';
import { SunIconComponent } from 'app/icons/sun-icon.component';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [MoonIconComponent, SunIconComponent, NgIf],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
})
export class ToggleThemeComponent {
  private readonly _themeService = inject(ThemeService);
  readonly theme!: Signal<ThemeType>;

  constructor() {
    this.theme = this._themeService.getTheme();
  }

  toggleTheme() {
    this._themeService.toggleTheme();
  }
}
