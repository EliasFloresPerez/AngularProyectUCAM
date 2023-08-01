import { Component ,Input } from '@angular/core';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  selectedColor: string = '#000000'; // Valor inicial del color (negro)
  ColorPrimario: string =   getComputedStyle(document.documentElement).getPropertyValue('--color-principal');
  ColorSecundario: string = getComputedStyle(document.documentElement).getPropertyValue('--color-secundario');
  ColorTerciario: string =  getComputedStyle(document.documentElement).getPropertyValue('--color-terciario');

  ngOnInit() {
    // Recuperar los colores desde el Local Storage
    const colorPrimarioGuardado = localStorage.getItem('colorPrimario');
    const colorSecundarioGuardado = localStorage.getItem('colorSecundario');
    const colorTerciarioGuardado = localStorage.getItem('colorTerciario');

    // Si no hay colores guardados, se usan los colores por defecto
    if (!colorPrimarioGuardado || !colorSecundarioGuardado || !colorTerciarioGuardado) {
      return;
    }else{

      this.ColorPrimario = colorPrimarioGuardado;
      this.ColorSecundario = colorSecundarioGuardado;
      this.ColorTerciario = colorTerciarioGuardado;

      this.onEnviarClick();
    }

  }

  onColorChange(evento:any,tipo: any) {
    // Aquí puedes realizar cualquier acción necesaria cuando cambie el color
    this.selectedColor = evento.target.value;;

    if(tipo === 'primario'){
      this.ColorPrimario = this.selectedColor;
    }else if (tipo === 'secundario'){
      this.ColorSecundario = this.selectedColor;
    }else if (tipo === 'terciario'){
      this.ColorTerciario = this.selectedColor;
    }
    
  }

  onEnviarClick(){

    // Guardar los colores en el Local Storage
    localStorage.setItem('colorPrimario', this.ColorPrimario);
    localStorage.setItem('colorSecundario', this.ColorSecundario);
    localStorage.setItem('colorTerciario', this.ColorTerciario);

    document.documentElement.style.setProperty('--color-principal', this.ColorPrimario);
    document.documentElement.style.setProperty('--color-secundario', this.ColorSecundario);
    document.documentElement.style.setProperty('--color-terciario', this.ColorTerciario);

    //Calcular el color de texto
    document.documentElement.style.setProperty('--color-textoPrincipal', this.getLuminosity(this.ColorPrimario));
    document.documentElement.style.setProperty('--color-textoSecundario', this.getLuminosity(this.ColorSecundario));
    document.documentElement.style.setProperty('--color-textoTerciario', this.getLuminosity(this.ColorTerciario));

    // Guardar los colores del texto en el Local Storage
    localStorage.setItem('colorTextoPrincipal', this.getLuminosity(this.ColorPrimario));
    localStorage.setItem('colorTextoSecundario', this.getLuminosity(this.ColorSecundario));
    localStorage.setItem('colorTextoTerciario', this.getLuminosity(this.ColorTerciario));

  }

  getLuminosity(color: string): string {
    // Función para convertir el color hexadecimal a sus componentes RGB
    function hexToRGB(hex: string) {
      const r = parseInt(hex.substr(1, 2), 16);
      const g = parseInt(hex.substr(3, 2), 16);
      const b = parseInt(hex.substr(5, 2), 16);
      return { r, g, b };
    }
  
    // Función para calcular la luminosidad según la fórmula
    function calculateLuminosity(rgb: { r: number; g: number; b: number }) {
      return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    }
  
    // Obtener los componentes RGB del color
    const rgbColor = hexToRGB(color);
  
    // Calcular la luminosidad del color
    const luminosity = calculateLuminosity(rgbColor);
  
    // Determinar si el color tiende a ser oscuro o claro
    return luminosity > 0.5 ? '#000000' : '#ffffff';
  }
  
}
