import { Injectable, Signal, signal } from '@angular/core';

export type ThemeType = 'DARK' | 'LIGHT';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme = signal<ThemeType>('LIGHT');

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      this._theme.set('DARK');
      document.body.classList.add('dark');
    } else {
      this._theme.set('LIGHT');
      document.body.classList.remove('dark');
    }
  }

  getTheme(): Signal<ThemeType> {
    return this._theme.asReadonly();
  }

  toggleTheme() {
    this._theme.update((theme) => (theme === 'DARK' ? 'LIGHT' : 'DARK'));
    document.body.classList.toggle('dark');
  }
}
