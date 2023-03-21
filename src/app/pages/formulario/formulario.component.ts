import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

    constructor( 
      private formBuilder: FormBuilder
    ){}

      formCadastro:FormGroup;
    ngOnInit(): void {
      this.setFormToLogin();
    }

    setFormToLogin(){
        this.formCadastro = this.formBuilder.group({
          nome: new FormControl(null, Validators.required),
          cpf: new FormControl(null, [Validators.required ,Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]),
          date: new FormControl(null, Validators.required),
        });
      
    }
    submitCadastro(){
      
    }

}
