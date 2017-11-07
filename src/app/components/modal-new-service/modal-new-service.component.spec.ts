import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewServiceComponent } from './modal-new-service.component';

describe('ModalNewServiceComponent', () => {
  let component: ModalNewServiceComponent;
  let fixture: ComponentFixture<ModalNewServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
