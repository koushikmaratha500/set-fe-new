import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEducationComponent } from './skill-education.component';

describe('SkillEducationComponent', () => {
  let component: SkillEducationComponent;
  let fixture: ComponentFixture<SkillEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
