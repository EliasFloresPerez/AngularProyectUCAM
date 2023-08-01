import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {
  timestamp = Date.now();
  numero: number = 0;
  Lista : any[] = [];
  
  ListaNombre = ["Original","Gris","Sin Sombra","Canny","Contornos","Rectangulos","Puntos #1","Cuadrilla #1","Puntos #2","Cuadrilla #2","Imagen Final"]
  suprimirEfectos = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    const numeroParam = this.route.snapshot.paramMap.get('numero');
    this.numero = numeroParam !== null ? parseInt(numeroParam, 10) : NaN;

    if (this.numero){

      this.numero = this.numero > 10 ? 10 : 8;

      if(this.numero == 8){
        this.ListaNombre = ["Original","Gris","Sin Sombra","Canny","Contornos","Rectangulos","Puntos #1","Cuadrilla #1","Imagen Final"]
        console.log("Cambios aplicados");
        this.cambiarSuprimirEfectos();
      }

      for (let i = 0; i <= this.numero; i++) {
        this.Lista.push({
          Nombre : this.ListaNombre[i],
          ruta : "https://test-services-4hi6.onrender.com/Archivos/Imagen_"+i+".jpg"
        });
      }
    }

    

  }

  cambiarSuprimirEfectos() {
    this.suprimirEfectos = !this.suprimirEfectos;
  }
}
