import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthgradeVideosComponent } from './fifthgrade-videos.component';

describe('FifthgradeVideosComponent', () => {
  let component: FifthgradeVideosComponent;
  let fixture: ComponentFixture<FifthgradeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthgradeVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthgradeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
