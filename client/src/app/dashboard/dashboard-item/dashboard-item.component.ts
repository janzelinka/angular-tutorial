import { Component, input } from '@angular/core';

type TInput = { src: string; alt: string };

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItemComponent {
  // @Input({ required: true }) imageSrc!: string;
  // @Input() altText: string;
  // @Input({ required: true }) title!: string;

  image = input.required<TInput>();
  title = input.required<string>();
}
