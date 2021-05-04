import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {


  usuario = {
    nombre: "Dilan",
    apellido: "Uriostegui",
    correo: "dilan.uriostegui@gmail.com",
    pais: 'ECU',
    genero: 'M'

  }

  paises: any[] = [];

  constructor( private paisService: PaisesService ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
        .subscribe( paises => {
          this.paises = paises;
          this.paises.unshift({
            nombre: '[Seleccione Pais]',
            codigo: ''
          })
        } );
  }

  guardar( forma: NgForm ){
    console.log(forma);

    if(forma.invalid){

      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      })
      return ;
    }
    console.log(forma.value);
  }

}
