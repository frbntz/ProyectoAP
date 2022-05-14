import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      mail:['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      /*Llamamos a nuestro servicio para enviar los datos al servidor
      Tambien podríamos ejecutar alguna lógica extra*/
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }

}
