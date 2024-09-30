import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoGanadorComponentComponent } from './dialogo-ganador.component.component';

describe('DialogoGanadorComponentComponent', () => {
  let component: DialogoGanadorComponentComponent;
  let fixture: ComponentFixture<DialogoGanadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoGanadorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoGanadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
