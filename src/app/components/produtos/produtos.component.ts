import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

enum Departament {
  COZINHA,
  SALA_DE_ESTAR,
  BANHEIRO,
  QUARTO,
  ESCRITORIO,
  JARDIM,
  AREA_DE_LAZER,
}

type Product = {
  id: number;
  heading: string;
  departament: Departament[];
  rating: number;
  urlImge: string;
  currentPrice: number;
  oldPrice?: number;
};

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  productList: Product[] = [
    {
      id: 0,
      heading: 'Mesa 1,60 m x 80 cm alentejo',
      departament: [Departament.SALA_DE_ESTAR, Departament.COZINHA],
      rating: 4.5,
      urlImge: '../../../assets/mesa-160-m-x-80-cm-am-ndoa-alentejo_st0.webp',
      currentPrice: 799.9,
      oldPrice: 1599.0,
    },
    {
      id: 1,
      heading: 'Cadeira empilhável talk',
      departament: [Departament.JARDIM, Departament.AREA_DE_LAZER],
      rating: 4.0,
      urlImge: '../../../assets/cadeira-zimbro-zimbro-talk_st0.webp',
      currentPrice: 99.9,
      oldPrice: 199.9,
    },
    {
      id: 2,
      heading: 'SOFÁ 2 LUGARES COM PUFF/BAÚ MUY',
      departament: [Departament.SALA_DE_ESTAR],
      rating: 4.7,
      urlImge:
        '../../../assets/2-lugares-com-puff-bau-muy-mescla-grafite-_st0.png',
      currentPrice: 2318.9,
      oldPrice: 2698.9,
    },
    {
      id: 3,
      heading: 'ROLLINGS GAVETEIRO PARA ESCRITÓRIO 3GV.',
      departament: [Departament.ESCRITORIO],
      rating: 4.8,
      urlImge:
        '../../../assets/rollings-gaveteiro-3gv-c-puxador-ultramarine-profundo-cobre-_st0.webp',
      currentPrice: 837.6,
      oldPrice: 1099.6,
    },
  ];

  getDiscount(old: number, current: number) {
    return Math.floor(((old - current) * 100) / old);
  }
}
