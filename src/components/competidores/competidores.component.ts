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

  grupo1: string[] = ["Hannia", "Abarca", "Melissa", "Sujey", "Bryan", "Fabricio", "Ameth", "Héctor", "Gael", "Lyz", "Luis"];
  grupo2: string[] = ["Jose", "Christopher", "Angel", "Maximiliano", "Fredy", "Bruno", "Joaquin", "Antonio", "Marcos", "Ulises"];

  eliminados: string [] = []; 
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
    this.grupo1.splice(this.posicionRandomUno,1);
    this.grupo2.splice(this.posicionRandomDos,1);
    this.eliminados.push(this.estudiante1);
    this.eliminados.push(this.estudiante2);
    console.log(`Estudiantes seleccionados: ${this.estudiante1} y ${this.estudiante2}`);
  }

 
}
