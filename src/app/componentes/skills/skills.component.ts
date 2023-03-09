import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  habilidades = [
    {
      nombre: 'Trabajo en equipo',
      nivel: 75
    },
    {
      nombre: 'Sociabilidad',
      nivel: 50
    },
    {
      nombre: 'Paciencia',
      nivel:95
    }
  ]
}
