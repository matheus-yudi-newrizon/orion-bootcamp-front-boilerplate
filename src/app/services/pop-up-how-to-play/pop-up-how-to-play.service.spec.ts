import { TestBed } from '@angular/core/testing';

import { PopUpHowToPlayService } from './pop-up-how-to-play.service';

describe('PopUpHowToPlayService', () => {
  let service: PopUpHowToPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopUpHowToPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
