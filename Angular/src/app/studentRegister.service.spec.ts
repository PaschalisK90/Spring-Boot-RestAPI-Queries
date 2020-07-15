import { TestBed } from '@angular/core/testing';

import { StudentRegisterService} from './studentRegister.service';

describe('StudentRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRegisterService = TestBed.get(StudentRegisterService);
    expect(service).toBeTruthy();
  });
});
