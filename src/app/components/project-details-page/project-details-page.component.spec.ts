import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsPageComponent } from './project-details-page.component';

describe('ProjectDetailsPageComponent', () => {
  let component: ProjectDetailsPageComponent;
  let fixture: ComponentFixture<ProjectDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
