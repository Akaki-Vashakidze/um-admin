import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAppsComponent } from './clients-apps.component';

describe('ClientsAppsComponent', () => {
  let component: ClientsAppsComponent;
  let fixture: ComponentFixture<ClientsAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsAppsComponent]
    });
    fixture = TestBed.createComponent(ClientsAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
