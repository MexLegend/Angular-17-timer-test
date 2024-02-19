import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerConfigurationWithSignalsComponent } from './timer-configuration-with-signals.component';

describe('TimerConfigurationWithSignalsComponent', () => {
  let component: TimerConfigurationWithSignalsComponent;
  let fixture: ComponentFixture<TimerConfigurationWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerConfigurationWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerConfigurationWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
