import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPainelComponent } from './meu-painel.component';

describe('MeuPainelComponent', () => {
  let component: MeuPainelComponent;
  let fixture: ComponentFixture<MeuPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
