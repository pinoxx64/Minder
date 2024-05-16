import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(

  ){}
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() logged = new EventEmitter<boolean>();
  @Input() visible: boolean = false;
  correo = ''
  contrasena = ''
  error:string | null=null
  
  cerrar(): void {
    //this.register=false
    this.cerrarModal.emit();
  }
    showDialog() {
      this.visible = true;
    }
  login(){
  this.servicioAuth.login(this.correo,this.contrasena).subscribe({
    next:(data:any)=>{
      this.logged.emit(true)
      sessionStorage.setItem('token',data.token)
      this.servicioAuth.loginOn()
      this.visible=false
    },
    error:(err)=>{
      this.logged.emit(false)
      this.error=err.error.msg
  
    }
  })
  }
}
