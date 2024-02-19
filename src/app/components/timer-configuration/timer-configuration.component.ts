import { Component, inject } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { TimerService } from 'app/core/services/timer.service';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITimerForm } from 'app/core/interfaces/timer.interface';

@Component({
  selector: 'app-timer-configuration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    RadioGroupComponent,
    ButtonComponent,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './timer-configuration.component.html',
  styleUrl: './timer-configuration.component.scss',
})
export class TimerConfigurationComponent {
  private readonly _timerService = inject(TimerService);
  private readonly _fb = inject(NonNullableFormBuilder);

  form!: FormGroup<ITimerForm>;
  showTimer!: Observable<boolean>;

  constructor() {
    this.initForm();
    this.showTimer = this._timerService.getShowTimer();
  }

  initForm() {
    this.form = this._fb.group({
      timerValue: this._fb.control(10, Validators.required),
      isCountdown: this._fb.control(true, Validators.required),
    });
  }

  startTimer() {
    if (this.form.valid) {
      const { timerValue, isCountdown } = this.form.getRawValue();

      console.log({ timerValue, isCountdown });

      return;
      this._timerService.startTimer();
    }
  }
}
