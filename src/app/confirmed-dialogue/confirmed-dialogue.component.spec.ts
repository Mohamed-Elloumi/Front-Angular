import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedDialogueComponent } from './confirmed-dialogue.component';

describe('ConfirmedDialogueComponent', () => {
  let component: ConfirmedDialogueComponent;
  let fixture: ComponentFixture<ConfirmedDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedDialogueComponent]
    });
    fixture = TestBed.createComponent(ConfirmedDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
