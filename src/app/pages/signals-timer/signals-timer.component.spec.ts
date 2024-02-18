import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTimerComponent } from './signals-timer.component';

describe('SignalsTimerComponent', () => {
  let component: SignalsTimerComponent;
  let fixture: ComponentFixture<SignalsTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
