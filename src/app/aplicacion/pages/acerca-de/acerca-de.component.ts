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
      Mensaje: "I dont know what to say",
      Frase: "Tutor del proyecto" ,flipped: false 
    },
    {
      Nombre: "Elias Flores",
      Foto: "../assets/Nosotros/Elias.jpg",
      Mensaje: "I dont know what to say",
      Frase: "La vida es un sueño :)" ,flipped: false 
    },
    {
      Nombre: "Nohely Bodniza",
      Foto: "../assets/Nosotros/Nohely.jpg",
      Mensaje: "I dont know what to say",
      Frase: "¿Ya es viernes ?", flipped: false
    },
    
    {
      Nombre: "Jim Bastidas",
      Foto: "../assets/Nosotros/Jim.jpg",
      Mensaje: "I dont know what to say",
      Frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", flipped: false 
    },
    
    {
      Nombre: "Melanie Andrade",
      Foto: "../assets/Nosotros/Melanie.jpg",
      Mensaje: "Soy una estudiante de Ing en Tics, me encanta darme cuenta que si quieres puedes, porque eres el unico que se pone obstaculos.",
      Frase: "No importa tu contexto, siempre puedes salir adelante", flipped: false 
    },

    {
      Nombre: "Joel Adrian",
      Foto: "../assets/Nosotros/Joel.jpg",
      Mensaje: "I dont know what to say",
      Frase: "hmmm dejame recordar", flipped: false 
    },

    {
      Nombre: "Joseph Guaspha",
      Foto: "../assets/Nosotros/Joseph.jpg",
      Mensaje: "",
      Frase: "No te necesito aquí conmigo para amarte", flipped: false 
    },
    {
      Nombre: "Raul Garcia",
      Foto: "../assets/Nosotros/Raul.jpg",
      Mensaje: "I dont know what to say",
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
