import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-competidor-eliminado',
  standalone: true,
  imports: [],
  templateUrl: './dialogo-competidor-eliminado.component.html',
  styleUrl: './dialogo-competidor-eliminado.component.scss'
})
export class DialogoCompetidorEliminadoComponent {

  // Inyecta MatDialogRef para controlar el diálogo
  constructor(
    public dialogRef: MatDialogRef<DialogoCompetidorEliminadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { competidor: string }
  ) {}

  // Método para cerrar el diálogo
  cerrarDialogo(): void {
    this.dialogRef.close();  // Cierra el diálogo
  }
}
