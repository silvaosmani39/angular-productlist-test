import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroChevronDown,
  heroEllipsisVertical,
  heroReceiptPercent,
  heroTag,
} from '@ng-icons/heroicons/outline';

import {
  heroChevronDownMini,
  heroChevronRightMini,
  heroChevronUpMini,
} from '@ng-icons/heroicons/mini';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, NgIcon, ToggleComponent],
  providers: [
    provideIcons({
      heroChevronDown,
      heroChevronUpMini,
      heroChevronDownMini,
      heroChevronRightMini,
      heroEllipsisVertical,
      heroTag,
      heroReceiptPercent,
    }),
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  item: any;

  expandAttachments = false;
  combine = true;

  orderColors = ['#4E86FA', '#8E36E7', '#25C2B1'];

  onCombine($event: Event) {
    $event.stopPropagation();
    $event.preventDefault();
    console.log(this.combine);
    this.combine = !this.combine;
  }

  get hasAttachments() {
    return this.item.attachments?.length > 0;
  }
}
