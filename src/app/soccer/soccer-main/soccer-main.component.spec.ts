import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerMainComponent } from './soccer-main.component';

describe('SoccerMainComponent', () => {
  let component: SoccerMainComponent;
  let fixture: ComponentFixture<SoccerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
