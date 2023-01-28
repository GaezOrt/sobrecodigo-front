import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsActiveUsersComponent } from './cards-active-users.component';

describe('CardsActiveUsersComponent', () => {
  let component: CardsActiveUsersComponent;
  let fixture: ComponentFixture<CardsActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
