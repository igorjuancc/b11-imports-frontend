import { TestBed } from '@angular/core/testing';

import { GradeTamanhoService } from './grade-tamanho.service';

describe('GradeTamanhoService', () => {
  let service: GradeTamanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeTamanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
