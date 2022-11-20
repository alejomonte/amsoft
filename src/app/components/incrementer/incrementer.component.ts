import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent {

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary';
  
  @Output('valor') valorSalida:EventEmitter<number>= new EventEmitter();
  
  get getPorcentaje(){
    return `${this.progreso }%`;
  }
  cambiarValor(valor: number){
    if (this.progreso>=100 && valor>0){
      this.valorSalida.emit(100);
      this.progreso=100;
    }
    if (this.progreso<=0 && valor<0){
      this.valorSalida.emit(0);
      this.progreso=0;
    }
    this.progreso=this.progreso+valor;
    this.valorSalida.emit(this.progreso);
  }
  OnChange(nuevoValor:number){
    if (nuevoValor>=100 ){
      this.progreso=100;
    }else if (nuevoValor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
