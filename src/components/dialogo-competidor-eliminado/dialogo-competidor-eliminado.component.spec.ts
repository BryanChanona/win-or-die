import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCompetidorEliminadoComponent } from './dialogo-competidor-eliminado.component';

describe('DialogoCompetidorEliminadoComponent', () => {
  let component: DialogoCompetidorEliminadoComponent;
  let fixture: ComponentFixture<DialogoCompetidorEliminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoCompetidorEliminadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoCompetidorEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
