import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-highlights',
  imports: [CommonModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss'
})
export class HighlightsComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private timerId: any = null;

  readonly activeIndex = signal<number>(0);

  readonly items = [
    {
      id: 0,
      icon: 'best-price',
      title: 'Preço Justo, Sem Surpresa',
      description: 'Aqui não tem susto no orçamento. É o que precisa, e ponto.'
    },
    {
      id: 1,
      icon: 'guarantee',
      title: 'Serviço com Garantia',
      description: 'Peças de qualidade, serviço bem feito e garantia de verdade.'
    },
    {
      id: 2,
      icon: 'certified',
      title: 'Mecânico que Resolve',
      description: 'Experiência de verdade, com profissional que fala a sua língua.'
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timerId = setInterval(() => {
        this.activeIndex.update(prev => (prev + 1) % this.items.length);
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
