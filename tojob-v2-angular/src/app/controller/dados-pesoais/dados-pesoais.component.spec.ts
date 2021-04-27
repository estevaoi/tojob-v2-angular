import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPesoaisComponent } from './dados-pesoais.component';

describe('DadosPesoaisComponent', () => {
  let component: DadosPesoaisComponent;
  let fixture: ComponentFixture<DadosPesoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPesoaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPesoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
