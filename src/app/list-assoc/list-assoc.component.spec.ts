import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssocComponent } from './list-assoc.component';

describe('ListAssocComponent', () => {
  let component: ListAssocComponent;
  let fixture: ComponentFixture<ListAssocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
