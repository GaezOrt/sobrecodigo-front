import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosComponent } from './desafios.component';

describe('DesafiosComponent', () => {
  let component: DesafiosComponent;
  let fixture: ComponentFixture<DesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
