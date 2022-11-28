import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCincoMlehoreClientessComponent } from './consultar-cinco-mlehore-clientess.component';

describe('ConsultarCincoMlehoreClientessComponent', () => {
  let component: ConsultarCincoMlehoreClientessComponent;
  let fixture: ComponentFixture<ConsultarCincoMlehoreClientessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCincoMlehoreClientessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCincoMlehoreClientessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
