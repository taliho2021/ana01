import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwarderComponent } from './forwarder.component';

describe('ForwarderComponent', () => {
  let component: ForwarderComponent;
  let fixture: ComponentFixture<ForwarderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwarderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForwarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
