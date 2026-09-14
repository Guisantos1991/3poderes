import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../../core/data/company.data';

@Component({
  selector: 'app-whatsapp-fab',
  imports: [CommonModule],
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  readonly company = COMPANY_DATA;
  readonly isPopoverOpen = signal<boolean>(false);

  togglePopover(): void {
    this.isPopoverOpen.update(v => !v);
  }

  closePopover(): void {
    this.isPopoverOpen.set(false);
  }
}
