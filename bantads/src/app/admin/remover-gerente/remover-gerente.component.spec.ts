import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverGerenteComponent } from './remover-gerente.component';

describe('RemoverGerenteComponent', () => {
  let component: RemoverGerenteComponent;
  let fixture: ComponentFixture<RemoverGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoverGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
