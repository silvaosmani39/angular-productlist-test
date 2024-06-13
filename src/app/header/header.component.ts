import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronLeft,
  heroEllipsisVertical,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ heroChevronLeft, heroEllipsisVertical })],
})
export class HeaderComponent {
  currentOption = 1;
}
