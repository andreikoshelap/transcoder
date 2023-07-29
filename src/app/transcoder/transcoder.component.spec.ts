import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscoderComponent } from './transcoder.component';

describe('TranscoderComponent', () => {
  let component: TranscoderComponent;
  let fixture: ComponentFixture<TranscoderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscoderComponent]
    });
    fixture = TestBed.createComponent(TranscoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
