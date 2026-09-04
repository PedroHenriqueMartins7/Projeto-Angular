import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent {
  nomeProduto = 'Mouse Gamer';
  estoque = 0;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
