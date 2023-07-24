import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApplicationsComponent } from './client-applications.component';

describe('ClientApplicationsComponent', () => {
  let component: ClientApplicationsComponent;
  let fixture: ComponentFixture<ClientApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientApplicationsComponent]
    });
    fixture = TestBed.createComponent(ClientApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
