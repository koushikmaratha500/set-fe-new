import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthgradeVideosComponent } from './fourthgrade-videos.component';

describe('FourthgradeVideosComponent', () => {
  let component: FourthgradeVideosComponent;
  let fixture: ComponentFixture<FourthgradeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthgradeVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthgradeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
