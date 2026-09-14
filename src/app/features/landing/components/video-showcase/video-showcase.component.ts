import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../../../core/data/company.data';

@Component({
  selector: 'app-video-showcase',
  imports: [CommonModule],
  templateUrl: './video-showcase.component.html',
  styleUrl: './video-showcase.component.scss'
})
export class VideoShowcaseComponent {
  @ViewChild('videoRef') videoElement?: ElementRef<HTMLVideoElement>;

  readonly company = COMPANY_DATA;

  // Inicia obrigatoriamente no mudo para autoplay suave e sem bloqueios de browser
  readonly isMuted = signal<boolean>(true);
  readonly isPlaying = signal<boolean>(true);

  toggleSound(): void {
    if (this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.muted = !video.muted;
      this.isMuted.set(video.muted);
    }
  }

  togglePlay(): void {
    if (this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      if (video.paused) {
        video.play();
        this.isPlaying.set(true);
      } else {
        video.pause();
        this.isPlaying.set(false);
      }
    }
  }
}
