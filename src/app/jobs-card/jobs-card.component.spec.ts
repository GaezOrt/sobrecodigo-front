import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCardComponent } from './jobs-card.component';

describe('JobsCardComponent', () => {
  let component: JobsCardComponent;
  let fixture: ComponentFixture<JobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
