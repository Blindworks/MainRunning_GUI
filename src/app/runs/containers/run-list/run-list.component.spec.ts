import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunListComponent } from './run-list.component';

describe('RunListComponent', () => {
  let component: RunListComponent;
  let fixture: ComponentFixture<RunListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
