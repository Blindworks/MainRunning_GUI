import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunUploadComponent } from './run-upload.component';

describe('RunUploadComponent', () => {
  let component: RunUploadComponent;
  let fixture: ComponentFixture<RunUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RunUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
