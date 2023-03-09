import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = 'https://localhost:4200/api';

  token: any; 
  constructor(private http:HttpClient, private router: Router) { }

  //servicio de logueo
  login(email: string, password: string){
    this.http.post(this.url + '/authenticate', {email: email, password: password})
    .subscribe((resp :any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      return 'Login service ok';
    })
  }

  //servicio de deslogueo
  logout(){
    localStorage.removeItem('token');
  }

  //servicio para ver si esta logueado
  public get logIn():boolean {
    return (localStorage.getItem('token') !== null);
  }
}
