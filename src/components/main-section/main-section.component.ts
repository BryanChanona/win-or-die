import { Component } from '@angular/core';
import { CompetidoresComponent } from '../competidores/competidores.component';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CompetidoresComponent, FooterComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  
}
