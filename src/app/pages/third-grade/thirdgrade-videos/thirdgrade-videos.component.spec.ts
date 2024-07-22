import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdgradeVideosComponent } from './thirdgrade-videos.component';

describe('ThirdgradeVideosComponent', () => {
  let component: ThirdgradeVideosComponent;
  let fixture: ComponentFixture<ThirdgradeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdgradeVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdgradeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
