import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroCurrencyDollar,
  heroEllipsisHorizontal,
  heroPencilSquare,
  heroPlus,
  heroShoppingBag,
  heroUserGroup,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      heroShoppingBag,
      heroPencilSquare,
      heroUserGroup,
      heroCurrencyDollar,
      heroEllipsisHorizontal,
      heroPlus,
    }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menuItems = [
    {
      iconName: 'heroShoppingBag',
      text: 'Catalog',
    },
    {
      iconName: 'heroPencilSquare',
      text: 'Proposals',
    },
    {
      iconName: 'heroUserGroup',
      text: 'People',
    },
    {
      iconName: 'heroCurrencyDollar',
      text: 'Payments',
    },
    {
      iconName: 'heroEllipsisHorizontal',
      text: 'More',
    },
  ];

  selectedMenuItem = 0;
}
