import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  isUserMenuVisible = false;

  toggleUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }
  scrollToContacto(): void {
    const footer = document.getElementById('contacto');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
