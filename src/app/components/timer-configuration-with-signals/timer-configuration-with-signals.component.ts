import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { SignalsTimerService } from 'app/core/services/signals-timer.service';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITimerForm } from 'app/core/interfaces/timer.interface';
import { DialogService } from 'app/core/services/dialog.service';

@Component({
  selector: 'app-timer-configuration-with-signals',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    RadioGroupComponent,
    ButtonComponent,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './timer-configuration-with-signals.component.html',
  styleUrl: './timer-configuration-with-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerConfigurationWithSignalsComponent {
  private readonly _timerService = inject(SignalsTimerService);
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _ds = inject(DialogService);

  form!: FormGroup<ITimerForm>;
  showTimer!: Signal<boolean>;

  constructor() {
    this.initForm();
    this.showTimer = this._timerService.getShowTimer();
  }

  initForm() {
    this.form = this._fb.group({
      timerValue: this._fb.control(15, Validators.required),
      isCountdown: this._fb.control(true, Validators.required),
    });
  }

  startTimer() {
    if (this.form.valid) {
      const timerConfig = this.form.getRawValue();

      this._timerService.startTimer(timerConfig);
      this.form.reset();
    }
  }
}
