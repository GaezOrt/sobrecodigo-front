import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardSimpleComponent } from './job-card-simple.component';

describe('JobCardSimpleComponent', () => {
  let component: JobCardSimpleComponent;
  let fixture: ComponentFixture<JobCardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCardSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
