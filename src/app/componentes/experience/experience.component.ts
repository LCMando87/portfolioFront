import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiencias = [
    {lugar: "Ingematica",
    anoDesde: 2018,
    anoHasta: 2019,
    puesto: "Analista QA",
    tareas: "Diagramar planes de pruebas, Ejecutar pruebas manuales, Uso de SQL"
    },
    {lugar: "Codeicus",
    anoDesde: 2020,
    anoHasta: 2021,
    puesto: "Analista Funcional",
    tareas: "Relevamiento de necesidades, Confección de casos de uso, Testing funcional, Desarrollo de testing automatizado, Uso de SQL"
    }
  ]
}
