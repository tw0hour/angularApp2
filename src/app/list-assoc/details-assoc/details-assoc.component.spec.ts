import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssocComponent } from './details-assoc.component';

describe('DetailsAssocComponent', () => {
  let component: DetailsAssocComponent;
  let fixture: ComponentFixture<DetailsAssocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAssocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
