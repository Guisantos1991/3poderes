import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';
import { HighlightsComponent } from './features/landing/components/highlights/highlights.component';
import { AboutComponent } from './features/landing/components/about/about.component';
import { ServicesComponent } from './features/landing/components/services/services.component';
import { VideoShowcaseComponent } from './features/landing/components/video-showcase/video-showcase.component';
import { TestimonialsComponent } from './features/landing/components/testimonials/testimonials.component';
import { ContactComponent } from './features/landing/components/contact/contact.component';
import { FooterComponent } from './features/landing/components/footer/footer.component';
import { WhatsappFabComponent } from './shared/components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    AboutComponent,
    ServicesComponent,
    VideoShowcaseComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFabComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3poderes';
}
