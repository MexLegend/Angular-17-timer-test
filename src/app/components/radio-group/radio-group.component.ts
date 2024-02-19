import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent implements OnInit {
  @Input({ required: true }) inputId!: string;
  @Input({ required: true }) groupName!: string;
  @Input() label?: string;
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
