import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu = false;
  darkModeActive: boolean;


  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public modeToggleSwitch(){

  }
}
