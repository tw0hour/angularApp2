import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCampComponent } from './help-camp.component';

describe('HelpCampComponent', () => {
  let component: HelpCampComponent;
  let fixture: ComponentFixture<HelpCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
