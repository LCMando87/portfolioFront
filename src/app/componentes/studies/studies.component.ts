import { Component } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  estudios = [
    {establecimiento: "Ministerio de desarrollo productivo",
    anoDesde: 2022,
    anoHasta: 2023,
    carrera: "Desarrollador Web Full Stack",
    descripcion: "Carrera completa de desarrollador web full stack. Lenguajes: HTML, CSS, JavaScript, Typescript, Java, SQL. Metodologías: Angular, Spring"
    }
  ]
}
