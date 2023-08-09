import { Component,ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  @ViewChildren('cardContainers') cardContainers: QueryList<ElementRef>;

  constructor() {
    this.cardContainers = new QueryList<ElementRef>();
  }
  

  estudiantes = [
    {
      Nombre: "Ing Luis Castillo",
      Foto: "../assets/Nosotros/inge.jpg",
      Mensaje: "Ingeniero en Electrónica, Telecomunicaciones y Redes, Máster en Seguridad Informática, Especialista en redes de Nueva Generación (NGN), Docente de la Universidad Estatal de Milagro",
      Frase: "Tutor del proyecto" ,flipped: false 
    },
    {
      Nombre: "Elias Flores",
      Foto: "../assets/Nosotros/Elias.jpg",
      Mensaje: "Estudiante de TICS me gusta programar y caminar por las tardes",
      Frase: "La vida es un sueño :)" ,flipped: false 
    },
    {
      Nombre: "Nohely Bodniza",
      Foto: "../assets/Nosotros/Nohely.jpg",
      Mensaje: "Estudiante de tics que realiza mas de una actividad al tiempo, fiel creyente que todo lo que se inicia debe de tener un final",
      Frase: "Nada con exceso, todo con medidas", flipped: false
    },
    
    {
      Nombre: "Jim Bastidas",
      Foto: "../assets/Nosotros/Jim.jpg",
      Mensaje: "Estudiante de TICS me gusta la docencia y la reparacion de equipos de computo",
      Frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", flipped: false 
    },
    
    {
      Nombre: "Melanie Andrade",
      Foto: "../assets/Nosotros/Melanie.jpg",
      Mensaje: "Soy una estudiante de  Tics, me encanta darme cuenta que si quieres puedes, porque eres el unico que se pone obstaculos.",
      Frase: "No importa tu contexto, siempre puedes salir adelante", flipped: false 
    },

    {
      Nombre: "Joel Adrian",
      Foto: "../assets/Nosotros/Joel.jpg",
      Mensaje: "Estudiante de TICS, curioso por conocer la programacion, me gusta los juegos y series con buena trama",
      Frase: "Reiniciando problemas, cargando soluciones.", flipped: false 
    },

    {
      Nombre: "Joseph Guaspha",
      Foto: "../assets/Nosotros/Joseph.jpg",
      Mensaje: "Estudiante de Tics , mecanico de motos y autos, me gusta la musica y los videojuegos",
      Frase: "No te necesito aquí conmigo para amarte", flipped: false 
    },
    {
      Nombre: "Raul Garcia",
      Foto: "../assets/Nosotros/Raul.jpg",
      Mensaje: "Estudiante de TICS me gusta programar en flutter , el cafe y las vacas",
      Frase: "Odio Flutter", flipped: false 
    }
  ];

  flipCard(estudiante: any) {
    estudiante.flipped = !estudiante.flipped;
  }

  

  private intervalId: any;

  ngAfterViewInit() {
    this.iniciarAnimacion();
  }

  ngOnDestroy() {
    this.detenerAnimacion();
  }

  iniciarAnimacion() {
    this.animarAleatorio();
    this.intervalId = setInterval(() => {
      this.animarAleatorio();
    }, 7000); // 
  }

  detenerAnimacion() {
    clearInterval(this.intervalId);
  }

  resetFlippedStatus() {
    this.estudiantes.forEach((estudiante) => {
      estudiante.flipped = false;
    });
  }

  animarAleatorio() {
    this.resetFlippedStatus();
    const cardContainersArray = this.cardContainers.toArray();

    // Ensure there are at least 3 cards available
    if (cardContainersArray.length < 3) {
      return;
    }

    const randomIndices: number[] = []; 
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * cardContainersArray.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    randomIndices.forEach((index) => {
      const randomCard = cardContainersArray[index].nativeElement;
      randomCard.classList.add('animacion');
      setTimeout(() => {
        this.flipCard(this.estudiantes[index]);
        setTimeout(() => {
          randomCard.classList.remove('animacion');
        },4900);
      }, 2000); // Adjust the delay to match your animation duration
      
    });
  }


}
