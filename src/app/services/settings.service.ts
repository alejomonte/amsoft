import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme=document.querySelector('#theme');

  constructor() {
    if(this.linkTheme!=null){
      const url= localStorage.getItem('theme') || './assets-css-colors-purple-dark.css';
      this.linkTheme.setAttribute('href',url);
    }
  }
  changeTheme(theme: string){
    if(this.linkTheme!=null){
      const url = `./assets/css/colors/${theme}.css`;
      this.linkTheme.setAttribute('href',url);
      localStorage.setItem('theme',url);
      this.checkCurrentTheme();
    }
  }  
  checkCurrentTheme(){
    const links=document.querySelectorAll('.selector');

    links.forEach(elemento => {
      elemento.classList.remove('working');
      const btnTheme=elemento.getAttribute('data-theme');
      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
      if (this.linkTheme!=null){
        const currentTheme = this.linkTheme.getAttribute('href');
        if(btnThemeUrl===currentTheme){
          elemento.classList.add('working');
        }
      }

    })
  
}
}
