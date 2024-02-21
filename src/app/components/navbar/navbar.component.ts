import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ToggleThemeComponent } from '@components/toggle-theme/toggle-theme.component';
import { LinkedinIconComponent } from 'app/icons/linkedin-icon.component';
import { GithubIconComponent } from 'app/icons/github-icon.component';
import { PortfolioIconComponent } from 'app/icons/portfolio-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, ToggleThemeComponent, GithubIconComponent, LinkedinIconComponent, PortfolioIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
