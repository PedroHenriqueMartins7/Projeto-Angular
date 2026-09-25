import { Component, signal } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProjetoAngular'); 

  @ Input ()
  topo = "loja 2"

  loja = "loja angular pai";
}
