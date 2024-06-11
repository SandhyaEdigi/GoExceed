import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPaginationComponent } from './header-pagination.component';

describe('HeaderPaginationComponent', () => {
  let component: HeaderPaginationComponent;
  let fixture: ComponentFixture<HeaderPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
