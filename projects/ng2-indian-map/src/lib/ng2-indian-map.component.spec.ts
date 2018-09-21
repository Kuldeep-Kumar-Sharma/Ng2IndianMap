import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2IndianMapComponent } from './ng2-indian-map.component';

describe('Ng2IndianMapComponent', () => {
  let component: Ng2IndianMapComponent;
  let fixture: ComponentFixture<Ng2IndianMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2IndianMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2IndianMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
