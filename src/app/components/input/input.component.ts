import { NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'number' | 'email' | 'password' | 'date';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type: InputType = 'text';
  @Input({ required: true }) inputId!: string;
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input({ required: true }) controlKey = '';

  private readonly _parentContainer = inject(ControlContainer);
  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = this.parentFormControl;
  }

  get parentFormControl() {
    return this._parentContainer.control?.get(this.controlKey) as FormControl;
  }
}
