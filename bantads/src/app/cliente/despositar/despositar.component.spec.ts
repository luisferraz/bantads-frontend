import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespositarComponent } from './despositar.component';

describe('DespositarComponent', () => {
  let component: DespositarComponent;
  let fixture: ComponentFixture<DespositarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespositarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespositarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
