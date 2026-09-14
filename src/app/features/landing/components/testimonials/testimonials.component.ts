import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { TESTIMONIALS_DATA } from '../../../../core/data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  readonly testimonials = TESTIMONIALS_DATA;
}
