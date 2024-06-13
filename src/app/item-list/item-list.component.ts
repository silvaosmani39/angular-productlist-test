import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

const DUMMY_ITEM = {
  item: '',
  name: 'Sony XBR75X900F',
  description: '75" Class HDR UHD Smart LED TV',
  orders: 1,
  recrruingTaxExcempt: false,
  wishlisted: false,
  receiptPercent: false,
  price: '$2,503.00',
  profit: '50.4%',
  image: 'images/item.png',
  total: '$3,006.00',
  attachments: [
    {
      item: '',
      name: 'Strong SM-T-L',
      description: 'Strong Mount - Tilt - 36 - 80" Displays',
      wishlisted: true,
      recrruingTaxExcempt: true,
      price: '$130.00',
      profit: '50.4%',
      image: 'images/attachment-1.png',
    },
    {
      item: 'Labor Item',
      name: 'Sony XBR75X900F',
      price: '$130.00',
      profit: '50.4%',
      image: 'images/attachment-2.png',
      recrruingTaxExcempt: true,
    },
  ],
};

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  items = [
    {
      ...DUMMY_ITEM,
    },
    {
      ...DUMMY_ITEM,
      wishlisted: true,
      price: '$1,503.00',
    },
    {
      ...DUMMY_ITEM,
      item: 'Custom Item',
      recrruingTaxExcempt: true,
      wishlisted: false,
      receiptPercent: true,
      price: '$1,503.00',
      orders: 3,
    },
    {
      ...DUMMY_ITEM,
      item: 'Custom Item',
      recrruingTaxExcempt: true,
      wishlisted: true,
      price: '$1,504.00',
      attachments: [],
      orders: 3,
    },
  ];
}
