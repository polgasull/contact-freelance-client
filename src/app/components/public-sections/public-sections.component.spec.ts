import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSectionsComponent } from './public-sections.component';

describe('PublicSectionsComponent', () => {
  let component: PublicSectionsComponent;
  let fixture: ComponentFixture<PublicSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
