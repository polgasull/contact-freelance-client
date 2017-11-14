import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateUpdateComponent } from './form-create-update.component';

describe('FormCreateUpdateComponent', () => {
  let component: FormCreateUpdateComponent;
  let fixture: ComponentFixture<FormCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
