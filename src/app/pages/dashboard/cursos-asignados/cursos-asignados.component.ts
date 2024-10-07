import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-asignados',
  standalone: true,
  imports: [],
  templateUrl: './cursos-asignados.component.html',
  styleUrl: './cursos-asignados.component.css'
})
export default  class  CursosAsignadosComponent implements OnInit {
 
  title: any;
  
  ngOnInit(): void {
    this.title = "CursosAsignados";
  }

  Prueba() {
    this.title = "CursosAsignados";
  }
}
