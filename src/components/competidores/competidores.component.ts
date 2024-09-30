import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogoCompetidorEliminadoComponent } from '../dialogo-competidor-eliminado/dialogo-competidor-eliminado.component';
import { DialogoGanadorComponent } from '../dialogo-ganador.component/dialogo-ganador.component.component';

@Component({
  selector: 'app-competidores',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatDialogModule, DialogoCompetidorEliminadoComponent],
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.scss']
})
export class CompetidoresComponent {

  grupo1: string[] = ["Hannia", "Abarca", "Melissa", "Sujey", "Bryan", "Milton", "Fabricio", "Ameth", "Manuel de Jesús", "Héctor", "Gael", "Lyz", "Luis", "Sayuri"];
  grupo2: string[] = ["Jose", "Christopher", "Angel", "Maximiliano", "Eduardo", "Fredy", "Yara", "Bruno", "Joaquin", "Antonio", "Osvaldo", "Marcos", "Ulises"];

  eliminados: string [] = [];  // Cambié a { estudiante: string } para mayor claridad
  estudiante1: string = '';
  estudiante2: string = '';
  posicionRandomUno: number = 0;
  posicionRandomDos: number = 0;

  constructor(public dialog: MatDialog) {}

  seleccionarEstudiantes() {
    if (this.grupo1.length === 0 || this.grupo2.length === 0) {
      console.log("No hay más participantes disponibles");
      return;
    }

    this.posicionRandomUno = Math.floor(Math.random() * this.grupo1.length);
    this.posicionRandomDos = Math.floor(Math.random() * this.grupo2.length);

    this.estudiante1 = this.grupo1[this.posicionRandomUno];
    this.estudiante2 = this.grupo2[this.posicionRandomDos];

    console.log(`Estudiantes seleccionados: ${this.estudiante1} y ${this.estudiante2}`);
  }

  eliminarCompetidor() {
    if (!this.estudiante1 || !this.estudiante2) {
      console.log("No hay competidores seleccionados para eliminar.");
      return;
    }

    const elegirCompetidor = Math.floor(Math.random() * 2) + 1;
    let competidorEliminado = '';

    if (elegirCompetidor === 1) {
      competidorEliminado = this.estudiante1;
      this.grupo1.splice(this.posicionRandomUno, 1);
      this.eliminados.push(competidorEliminado ); // Agregar al arreglo eliminados
      this.estudiante1 = '';
    } else {
      competidorEliminado = this.estudiante2;
      this.grupo2.splice(this.posicionRandomDos, 1);
      this.eliminados.push( competidorEliminado ); // Agregar al arreglo eliminados
      this.estudiante2 = '';
    }

    // Abrir el diálogo para mostrar el competidor eliminado
    this.dialog.open(DialogoCompetidorEliminadoComponent, {
      data: { competidor: competidorEliminado }
    });

    if (this.grupo1.length === 0 || this.grupo2.length === 0) {
      const equipoGanador = this.grupo1.length > 0 ? 'Grupo 1' : 'Grupo 2'; // Determinar el equipo ganador
      this.dialog.open(DialogoGanadorComponent, {
        data: { equipo: equipoGanador }
      });
  }
}}
