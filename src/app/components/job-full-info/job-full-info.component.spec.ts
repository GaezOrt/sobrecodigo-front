import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFullInfoComponent } from './job-full-info.component';

describe('JobFullInfoComponent', () => {
  let component: JobFullInfoComponent;
  let fixture: ComponentFixture<JobFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFullInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
