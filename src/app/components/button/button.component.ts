import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type NesButtonType = 'PRIMARY' | 'SUCCESS' | 'ERROR';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() type: NesButtonType = 'PRIMARY';
  @Input() customClasses?: string;
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();

  emitClick() {
    this.handleClick.emit(true);
  }
}
