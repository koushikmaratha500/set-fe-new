import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBoardComponent } from './state-board.component';

describe('StateBoardComponent', () => {
  let component: StateBoardComponent;
  let fixture: ComponentFixture<StateBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
