import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUsersComponent } from './ranking-users.component';

describe('RankingUsersComponent', () => {
  let component: RankingUsersComponent;
  let fixture: ComponentFixture<RankingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
