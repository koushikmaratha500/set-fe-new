import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseBoardComponent } from './cbse-board.component';

describe('CbseBoardComponent', () => {
  let component: CbseBoardComponent;
  let fixture: ComponentFixture<CbseBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CbseBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CbseBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
