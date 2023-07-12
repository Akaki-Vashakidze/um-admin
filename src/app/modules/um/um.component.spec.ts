import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmComponent } from './um.component';

describe('UmComponent', () => {
  let component: UmComponent;
  let fixture: ComponentFixture<UmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmComponent]
    });
    fixture = TestBed.createComponent(UmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
