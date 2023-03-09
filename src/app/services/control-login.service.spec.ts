import { TestBed } from '@angular/core/testing';

import { AbrirCerrarLoginService } from './control-login.service';

describe('AbrirLoginService', () => {
  let service: AbrirCerrarLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrirCerrarLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
