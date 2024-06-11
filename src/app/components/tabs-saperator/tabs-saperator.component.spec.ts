import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSaperatorComponent } from './tabs-saperator.component';

describe('TabsSaperatorComponent', () => {
  let component: TabsSaperatorComponent;
  let fixture: ComponentFixture<TabsSaperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSaperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsSaperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
