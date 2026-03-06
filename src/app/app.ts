import { Component, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './components/slide/slide.component';
import { SLIDES, SlideData } from './slides/slides.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SlideComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  slides: SlideData[] = SLIDES;
  currentIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  get current(): SlideData {
    return this.slides[this.currentIndex];
  }

  get progress(): number {
    return (this.currentIndex / (this.slides.length - 1)) * 100;
  }

  goTo(index: number): void {
    if (index < 0 || index >= this.slides.length) return;
    this.currentIndex = index;
    this.cdr.detectChanges();
  }

  next(): void { this.goTo(this.currentIndex + 1); }
  prev(): void { this.goTo(this.currentIndex - 1); }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') this.next();
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   this.prev();
  }
}

