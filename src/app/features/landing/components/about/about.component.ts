import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { COMPANY_DATA } from '../../../../core/data/company.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly company = COMPANY_DATA;
  readonly benefits = [
    'Diagnóstico computadorizado de ponta',
    'Peças de reposição originais e certificadas',
    'Orçamento transparente explicado item por item',
    'Duas unidades estruturadas: Canaã e Chácaras Tubalina',
    'Garantia real de serviço em todos os reparos'
  ];
}
