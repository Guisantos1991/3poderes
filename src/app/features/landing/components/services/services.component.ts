import { Component, OnInit, OnDestroy, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SERVICES_DATA } from '../../../../core/data/services.data';
import { COMPANY_DATA } from '../../../../core/data/company.data';

@Component({
  selector: 'app-services',
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private autoPlayTimer: any = null;

  readonly services = SERVICES_DATA;
  readonly company = COMPANY_DATA;

  readonly cardsPerView = 3;
  readonly currentSlide = signal<number>(0);

  // Com 6 serviços e 3 visíveis, as posições válidas são 0, 1, 2, 3
  readonly maxSlide = computed(() => Math.max(0, this.services.length - this.cardsPerView));

  // Fórmula exata: move (largura do card + gap de 24px) por passo.
  // No índice 3 (último), os cards 3, 4 e 5 preenchem exatamente 100% da tela, sem nenhum espaço vazio!
  readonly trackTransform = computed(() => {
    const idx = this.currentSlide();
    return `translateX(calc(-${idx} * ((100% - 48px) / 3 + 24px)))`;
  });

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    if (isPlatformBrowser(this.platformId) && !this.autoPlayTimer) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide(true);
      }, 4500);
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  nextSlide(isAuto = false): void {
    if (!isAuto) {
      this.stopAutoPlay();
    }
    this.currentSlide.update(curr => {
      // Loop contínuo: volta suavemente ao início sem nunca ultrapassar nem deixar espaços vazios
      return curr >= this.maxSlide() ? 0 : curr + 1;
    });
  }

  prevSlide(): void {
    this.stopAutoPlay();
    this.currentSlide.update(curr => {
      return curr <= 0 ? this.maxSlide() : curr - 1;
    });
  }

  goToSlide(idx: number): void {
    this.stopAutoPlay();
    this.currentSlide.set(Math.min(idx, this.maxSlide()));
  }

  getServiceWhatsappUrl(serviceTitle: string): string {
    const text = encodeURIComponent(`Olá! Gostaria de agendar o serviço de ${serviceTitle} na 3 Poderes.`);
    return `https://wa.me/${this.company.branches[0].phoneRaw}?text=${text}`;
  }
}
