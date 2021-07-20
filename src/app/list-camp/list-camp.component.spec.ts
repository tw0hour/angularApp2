import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampComponent } from './list-camp.component';

describe('ListCampComponent', () => {
  let component: ListCampComponent;
  let fixture: ComponentFixture<ListCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
