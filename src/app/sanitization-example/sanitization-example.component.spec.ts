import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizationExampleComponent } from './sanitization-example.component';

describe('SanitizationExampleComponent', () => {
  let component: SanitizationExampleComponent;
  let fixture: ComponentFixture<SanitizationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
