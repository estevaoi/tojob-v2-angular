import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaCanditadosComponent } from './para-canditados.component';

describe('ParaCanditadosComponent', () => {
  let component: ParaCanditadosComponent;
  let fixture: ComponentFixture<ParaCanditadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaCanditadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaCanditadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
