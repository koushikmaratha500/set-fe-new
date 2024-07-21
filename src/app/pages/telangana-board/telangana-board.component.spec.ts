import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelanganaBoardComponent } from './telangana-board.component';

describe('TelanganaBoardComponent', () => {
  let component: TelanganaBoardComponent;
  let fixture: ComponentFixture<TelanganaBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelanganaBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelanganaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
