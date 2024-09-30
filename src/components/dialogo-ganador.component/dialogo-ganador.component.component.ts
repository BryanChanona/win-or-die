import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-ganador',
  template: `
    <h1 mat-dialog-title>¡Ganador!</h1>
    <div mat-dialog-content>
      <p>El equipo ganador es: <strong>{{ data.equipo }}</strong></p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Aceptar</button>
    </div>
  `,
  styleUrls: ['./dialogo-ganador.component.component.scss']
})
export class DialogoGanadorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { equipo: string }) {}
}

