import { Component } from '@angular/core';
import { AbrirCerrarLoginService } from 'src/app/services/control-login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private modalLogin: AbrirCerrarLoginService){}

  ngOnInit(){
    this.modalLogin.$mostrarLogin.subscribe((valor)=> this.mostrarLogin = valor)
  }
  mostrarLogin: boolean = false;
  public llamarIniciarSesion() :void {
    this.mostrarLogin = true;
    console.log(this.mostrarLogin);
  }
}
