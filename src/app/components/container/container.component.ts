import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  @Input({ required: true }) title!: string;
}
