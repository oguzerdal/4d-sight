import { TestBed } from '@angular/core/testing';

import { UserListGuardService } from './user-list-guard.service';

describe('UserListGuardService', () => {
  let service: UserListGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
