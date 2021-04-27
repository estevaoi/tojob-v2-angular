import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaRecrutadoresComponent } from './para-recrutadores.component';

describe('ParaRecrutadoresComponent', () => {
  let component: ParaRecrutadoresComponent;
  let fixture: ComponentFixture<ParaRecrutadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaRecrutadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaRecrutadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
