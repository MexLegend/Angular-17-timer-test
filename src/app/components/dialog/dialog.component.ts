import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { type DialogSize } from 'app/core/interfaces/dialog.interface';
import { TimerPipe } from 'app/core/pipes/timer.pipe';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ButtonComponent, TimerPipe, NgClass],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) timer!: number;
  @Input({ required: true }) description!: string;
  @Input() size: DialogSize = 'md';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  private readonly _elementRef = inject(ElementRef);

  close(): void {
    this._elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this._elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
