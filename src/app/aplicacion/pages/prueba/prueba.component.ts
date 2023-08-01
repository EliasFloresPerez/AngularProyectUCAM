import { Component  } from '@angular/core';
import { ApiService } from 'src/app/aplicacion/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})


export class PruebaComponent {
  imagen: File | null = null;
  diccionario = {
    "#Preguntas": "20",
    "#Elecciones": "4",
    "Respuestas":''
  };

  mensaje = "";

  constructor(private apiService: ApiService, private router: Router) { }
  

  onSubmit() {
    // Aquí puedes acceder a los valores del formulario directamente usando las propiedades 'name'
    const preguntas = (document.getElementsByName('Preguntas')[0] as HTMLInputElement).value;
    const elecciones = (document.getElementsByName('Elecciones')[0] as HTMLInputElement).value;
    const respuestas = (document.getElementsByName('Respuestas')[0] as HTMLInputElement).value;
    const imagenInput = document.getElementsByName('Imagen')[0] as HTMLInputElement;

    if (preguntas && elecciones && imagenInput?.files?.length) {
      const imagen = imagenInput.files[0];
      // Realiza la lógica para enviar el formulario aquí
      console.log('Preguntas:', preguntas);
      console.log('Elecciones:', elecciones);
      console.log('Respuestas:', respuestas);
      console.log('Imagen:', imagen);
    } else {
      // Si faltan campos requeridos o no se seleccionó una imagen, muestra un mensaje de error o realiza la acción necesaria
      this.mensaje = "Falta campos";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // La alerta desaparecerá después de 5 segundos
      return;
    }
  }
  showAlert: boolean = false;

  onFileInputChange(event: any) {
    // Obtener el archivo seleccionado por el usuario
    const selectedFile = event.target.files[0];

    // Realizar la lógica necesaria con el archivo seleccionado (por ejemplo, mostrar su nombre)
    if (selectedFile) {
      console.log('Archivo seleccionado:', selectedFile.name);
      this.imagen = selectedFile;
    }
  }
  
  enviarConsulta() {

    // Aquí puedes acceder a los valores del formulario directamente usando las propiedades 'name'
    const preguntas = (document.getElementsByName('Preguntas')[0] as HTMLInputElement).value;
    const elecciones = (document.getElementsByName('Elecciones')[0] as HTMLInputElement).value;
    const respuestas = (document.getElementsByName('Respuestas')[0] as HTMLInputElement).value;
    

    if (preguntas && elecciones ) {
      
      // Realiza la lógica para enviar el formulario aquí
      console.log('Preguntas:', preguntas);
      console.log('Elecciones:', elecciones);
      console.log('Respuestas:', respuestas);

      //Creamos un diccionario con los datos
      this.diccionario = {
        "#Preguntas": preguntas,
        "#Elecciones": elecciones,
        "Respuestas": respuestas
      };
      
    } else {
      // Si faltan campos requeridos o no se seleccionó una imagen, muestra un mensaje de error o realiza la acción necesaria
      this.mensaje = "Algunos campos estan vacios";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // La alerta desaparecerá después de 5 segundos
      return;
    }


    if (!this.imagen) {
      this.mensaje = "Por favor, selecciona una imagen.";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // La alerta desaparecerá después de 5 segundos
      return;
    }

    
    // Convierte el diccionario a un string
    const diccionarioString = JSON.stringify(this.diccionario);

    console.log("Enviando datos...");
    console.log("Imagen:", this.imagen);
    console.log("Diccionario:", diccionarioString);
    this.apiService.enviarDatos(this.imagen, diccionarioString)
      .subscribe(
        response => {
          console.log("Respuesta de la API:", response);
          // Puedes hacer algo con la respuesta de la API aquí
          this.router.navigate(['/mostrar/11']);
        },
        error => {
          //console.error("Error en la solicitud:", error);
          this.router.navigate(['/mostrar/8']);
        }
      );
  }
}
