import { TestBed } from '@angular/core/testing';

import { ProjectAdapterService } from './project-adapter.service';

describe('ProjectAdapterService', () => {
  let service: ProjectAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
