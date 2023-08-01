import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  isNightMode: boolean = false;
  ImagenLogo = '';
  LogoModal = "../assets/imagenes/LogoBlanco.png";
  ngOnInit() {
    this.isNightMode = localStorage.getItem('isNightMode') === 'true';

    // Aplica el tema inicial al cargar la página
    this.applyTheme();
    this.aplyColor();

  }

  toggleTheme() {
    this.isNightMode = !this.isNightMode;
    this.applyTheme(); // Aplica el tema al cambiarlo
    localStorage.setItem('isNightMode', this.isNightMode.toString()); // Guarda la preferencia
  }

  private applyTheme() {
    if (this.isNightMode) {
      document.documentElement.style.setProperty('--color-fondo', '#2b2b2b');
      document.documentElement.style.setProperty('--color-textoFondo', '#ffffff');
      this.ImagenLogo = "../assets/imagenes/LogoBlanco.png";


    } else {
      document.documentElement.style.setProperty('--color-fondo', '#ffffff');
      document.documentElement.style.setProperty('--color-textoFondo', '#000000');
      this.ImagenLogo = "../assets/imagenes/LogoNegro.png";
    }
  }

  private aplyColor(){
    // Recuperar los colores desde el Local Storage
    const Primario = localStorage.getItem('colorPrimario');
    const Secundario = localStorage.getItem('colorSecundario');
    const Terciario = localStorage.getItem('colorTerciario');

    const TPrimario = localStorage.getItem('colorTextoPrincipal');
    const TSecundario = localStorage.getItem('colorTextoSecundario');
    const TTerciario = localStorage.getItem('colorTextoTerciario');

    // Si no hay colores guardados, se usan los colores por defecto
    if (!Primario || !Secundario || !Terciario) {
      return;
    }else{
        
      //Colores
        document.documentElement.style.setProperty('--color-principal', Primario);
        document.documentElement.style.setProperty('--color-secundario', Secundario);
        document.documentElement.style.setProperty('--color-terciario', Terciario);
      //Texto
        document.documentElement.style.setProperty('--color-textoPrincipal', TPrimario);
        document.documentElement.style.setProperty('--color-textoSecundario', TSecundario);
        document.documentElement.style.setProperty('--color-textoTerciario', TTerciario);

      
      //Logo modal
      if(TPrimario === "#ffffff"){
        this.LogoModal = "../assets/imagenes/LogoBlanco.png";
      }else{
        this.LogoModal = "../assets/imagenes/LogoNegro.png";
      }
    }
  }
}
