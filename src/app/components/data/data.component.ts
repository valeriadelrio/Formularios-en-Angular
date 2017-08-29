import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario:Object ={
    nombrecompleto: {
      nombre: "Valeria",
      apellido: "del Rio"
    },
    correo: "valeriadelrio@gmail.com",
    pasatiempos: ["Correr", "Dormir", "Comer"]

  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto':new FormGroup({
        'nombre': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),
        'apellido': new FormControl('', Validators.required ),
      }),
      'correo': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    })

    // this.forma.setValue(this.usuario);

  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    this.forma.reset({
      nombrecompleto: {
        nombre:"",
        apellido:"",
      },
      correo:""
    });
    // this.forma.controls['correo'].setValue()
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
    new FormControl('', Validators.required)
    )
  }

}
