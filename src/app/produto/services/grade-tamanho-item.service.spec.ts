import { TestBed } from '@angular/core/testing';

import { GradeTamanhoItemService } from './grade-tamanho-item.service';

describe('GradeTamanhoItemService', () => {
  let service: GradeTamanhoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeTamanhoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
