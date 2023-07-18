import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCardComponent } from './settings-card.component';

describe('SettingsCardComponent', () => {
  let component: SettingsCardComponent;
  let fixture: ComponentFixture<SettingsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCardComponent]
    });
    fixture = TestBed.createComponent(SettingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
