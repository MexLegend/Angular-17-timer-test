import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type NesButtonVariant = 'PRIMARY' | 'SUCCESS' | 'ERROR' | 'DEFAULT';
type NesButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() variant: NesButtonVariant = 'PRIMARY';
  @Input() type: NesButtonType = 'button';
  @Input() customClasses?: string;
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();

  emitClick() {
    this.handleClick.emit(true);
  }
}
