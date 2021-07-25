import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAssocComponent } from './help-assoc.component';

describe('HelpCampComponent', () => {
  let component: HelpAssocComponent;
  let fixture: ComponentFixture<HelpAssocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAssocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
