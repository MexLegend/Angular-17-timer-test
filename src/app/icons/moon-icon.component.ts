import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  template: `
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 149.53 149.53"
      [style.width.px]="size"
      [style.height.px]="size"
    >
      <g data-name="Layer 2">
        <g style="isolation:isolate" data-name="Layer 1">
          <path
            d="M75.7 0h10.75v10.75H75.7zM63.08 0h10.75v10.75H63.08zM50.47 0h10.75v10.75H50.47zM63.08 12.62h10.75v10.75H63.08zM50.47 12.62h10.75v10.75H50.47zM37.85 12.62H48.6v10.75H37.85zM25.23 12.62h10.75v10.75H25.23zM50.47 25.23h10.75v10.75H50.47zM37.85 25.23H48.6v10.75H37.85zM25.23 25.23h10.75v10.75H25.23zM12.62 25.23h10.75v10.75H12.62zM37.85 37.85H48.6V48.6H37.85zM25.23 37.85h10.75V48.6H25.23zM12.62 37.85h10.75V48.6H12.62zM37.85 50.47H48.6v10.75H37.85zM25.23 50.47h10.75v10.75H25.23zM12.62 50.47h10.75v10.75H12.62zM0 50.47h10.75v10.75H0zM138.78 63.08h10.75v10.75h-10.75zM37.85 63.08H48.6v10.75H37.85zM25.23 63.08h10.75v10.75H25.23zM12.62 63.08h10.75v10.75H12.62zM0 63.08h10.75v10.75H0zM138.78 75.7h10.75v10.75h-10.75zM126.17 75.7h10.75v10.75h-10.75zM37.85 75.7H48.6v10.75H37.85zM25.23 75.7h10.75v10.75H25.23zM12.62 75.7h10.75v10.75H12.62zM0 75.7h10.75v10.75H0zM138.78 88.32h10.75v10.75h-10.75zM126.17 88.32h10.75v10.75h-10.75zM113.55 88.32h10.75v10.75h-10.75zM50.47 88.32h10.75v10.75H50.47zM37.85 88.32H48.6v10.75H37.85zM25.23 88.32h10.75v10.75H25.23zM12.62 88.32h10.75v10.75H12.62zM0 88.32h10.75v10.75H0zM126.17 100.93h10.75v10.75h-10.75zM113.55 100.93h10.75v10.75h-10.75zM100.93 100.93h10.75v10.75h-10.75zM88.32 100.93h10.75v10.75H88.32zM75.7 100.93h10.75v10.75H75.7zM63.08 100.93h10.75v10.75H63.08zM50.47 100.93h10.75v10.75H50.47zM37.85 100.93H48.6v10.75H37.85zM25.23 100.93h10.75v10.75H25.23zM12.62 100.93h10.75v10.75H12.62zM126.17 113.55h10.75v10.75h-10.75zM113.55 113.55h10.75v10.75h-10.75zM100.93 113.55h10.75v10.75h-10.75zM88.32 113.55h10.75v10.75H88.32zM75.7 113.55h10.75v10.75H75.7zM63.08 113.55h10.75v10.75H63.08zM50.47 113.55h10.75v10.75H50.47zM37.85 113.55H48.6v10.75H37.85zM25.23 113.55h10.75v10.75H25.23zM12.62 113.55h10.75v10.75H12.62zM113.55 126.17h10.75v10.75h-10.75zM100.93 126.17h10.75v10.75h-10.75zM88.32 126.17h10.75v10.75H88.32zM75.7 126.17h10.75v10.75H75.7zM63.08 126.17h10.75v10.75H63.08zM50.47 126.17h10.75v10.75H50.47zM37.85 126.17H48.6v10.75H37.85zM25.23 126.17h10.75v10.75H25.23zM88.32 138.78h10.75v10.75H88.32zM75.7 138.78h10.75v10.75H75.7zM63.08 138.78h10.75v10.75H63.08zM50.47 138.78h10.75v10.75H50.47z"
          />
        </g>
      </g>
    </svg>
  `,
})
export class MoonIconComponent {
  @Input({ required: true }) size!: number;
}