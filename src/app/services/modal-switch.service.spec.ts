import { TestBed } from '@angular/core/testing';

import { ModalSwitchService } from './modal-switch.service';

describe('ModalSwitchService', () => {
  let service: ModalSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
