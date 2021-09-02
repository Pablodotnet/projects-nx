import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouGameComponent } from './dou-game.component';

describe('DouGameComponent', () => {
  let component: DouGameComponent;
  let fixture: ComponentFixture<DouGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
