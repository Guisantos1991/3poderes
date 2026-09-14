import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { COMPANY_DATA } from '../../../../core/data/company.data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly company = COMPANY_DATA;
}
