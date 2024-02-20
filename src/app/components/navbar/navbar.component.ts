import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ToggleThemeComponent } from '@components/toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, ToggleThemeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
