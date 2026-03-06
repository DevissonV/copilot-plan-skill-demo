import { Component, Input, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideData } from '../../slides/slides.data';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent implements OnChanges {
  @Input() slide!: SlideData;
  @Input() visible = false;

  animating = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.animating = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.animating = true;
      this.cdr.detectChanges();
    }, 10);
  }
}
