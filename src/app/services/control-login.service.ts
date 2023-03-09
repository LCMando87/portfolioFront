import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbrirCerrarLoginService {

  constructor() { }

  $mostrarLogin = new EventEmitter<any>();

}
