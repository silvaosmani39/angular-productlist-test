import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown, heroChevronUp } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroChevronDown, heroChevronUp })],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  expanded = false;
}
