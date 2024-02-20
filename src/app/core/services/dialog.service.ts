import {
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  createComponent,
  inject,
} from '@angular/core';
import { DialogComponent } from '@components/dialog/dialog.component';
import { Observable, Subject } from 'rxjs';
import { IDialogProps } from '../interfaces/dialog.interface';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _dialogNotifier?: Subject<boolean>;

  private readonly _appRef = inject(ApplicationRef);
  private readonly _injector = inject(EnvironmentInjector);

  open(props: IDialogProps): Observable<boolean> {
    const dialogComponent = createComponent(DialogComponent, {
      environmentInjector: this._injector,
    });

    dialogComponent.instance.title = props.title;
    dialogComponent.instance.timer = props.timer;
    dialogComponent.instance.description = props.description;
    dialogComponent.instance.closeEvent.subscribe(() => this.closeDialog());
    dialogComponent.instance.submitEvent.subscribe(() => this.submitDialog());

    document.body.appendChild(dialogComponent.location.nativeElement);

    this._appRef.attachView(dialogComponent.hostView);

    this._dialogNotifier = new Subject();
    return this._dialogNotifier?.asObservable();
  }

  closeDialog() {
    this._dialogNotifier?.complete();
  }

  submitDialog() {
    this._dialogNotifier?.next(true);
    this.closeDialog();
  }
}
