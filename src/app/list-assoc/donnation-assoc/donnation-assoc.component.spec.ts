import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnationAssocComponent } from './donnation-assoc.component';

describe('DonnationAssocComponent', () => {
  let component: DonnationAssocComponent;
  let fixture: ComponentFixture<DonnationAssocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnationAssocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnationAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
