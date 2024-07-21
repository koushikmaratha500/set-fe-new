import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsIotComponent } from './robotics-iot.component';

describe('RoboticsIotComponent', () => {
  let component: RoboticsIotComponent;
  let fixture: ComponentFixture<RoboticsIotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsIotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoboticsIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
