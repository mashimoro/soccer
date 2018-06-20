import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerTableComponent } from './soccer-table.component';

describe('SoccerTableComponent', () => {
  let component: SoccerTableComponent;
  let fixture: ComponentFixture<SoccerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
