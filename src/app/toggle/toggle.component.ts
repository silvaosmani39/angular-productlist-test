import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Input()
  label = '';

  @Input()
  checked = false;

  @Output()
  change = new EventEmitter();

  onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.change.emit(!this.checked);
    this.checked = !this.checked;
  }
}
