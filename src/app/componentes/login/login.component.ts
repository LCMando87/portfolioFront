import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AbrirCerrarLoginService } from 'src/app/services/control-login.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 form:FormGroup;
  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router, private modalLogin:AbrirCerrarLoginService){
      this.form = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required]
    });
    }

  login():void {
    const val = this.form.value;

    if (val.email && val.password) {
   //   this.authService.login(val.email, val.password)
      {
        console.log("logueado");
        this.router.navigateByUrl('/');
        this.cerrarModalLogin();
      }
    }
  }
  cerrarModalLogin(){
    this.modalLogin.$mostrarLogin.emit(false)
  }
}
