import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithSignalsComponent } from './timer-with-signals.component';

describe('TimerWithSignalsComponent', () => {
  let component: TimerWithSignalsComponent;
  let fixture: ComponentFixture<TimerWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
