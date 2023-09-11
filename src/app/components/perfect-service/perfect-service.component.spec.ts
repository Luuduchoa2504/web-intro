import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectServiceComponent } from './perfect-service.component';

describe('PerfectServiceComponent', () => {
  let component: PerfectServiceComponent;
  let fixture: ComponentFixture<PerfectServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectServiceComponent]
    });
    fixture = TestBed.createComponent(PerfectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
