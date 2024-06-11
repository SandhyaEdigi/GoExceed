import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleRadioCheckComponent } from './toggle-radio-check.component';

describe('ToggleRadioCheckComponent', () => {
  let component: ToggleRadioCheckComponent;
  let fixture: ComponentFixture<ToggleRadioCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleRadioCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleRadioCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
