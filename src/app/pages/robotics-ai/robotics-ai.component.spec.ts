import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsAiComponent } from './robotics-ai.component';

describe('RoboticsAiComponent', () => {
  let component: RoboticsAiComponent;
  let fixture: ComponentFixture<RoboticsAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoboticsAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
