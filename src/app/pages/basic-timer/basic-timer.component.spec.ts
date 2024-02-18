import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTimerComponent } from './basic-timer.component';

describe('BasicTimerComponent', () => {
  let component: BasicTimerComponent;
  let fixture: ComponentFixture<BasicTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
