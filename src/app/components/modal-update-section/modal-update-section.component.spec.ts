import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateSectionComponent } from './modal-update-section.component';

describe('ModalUpdateSectionComponent', () => {
  let component: ModalUpdateSectionComponent;
  let fixture: ComponentFixture<ModalUpdateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
