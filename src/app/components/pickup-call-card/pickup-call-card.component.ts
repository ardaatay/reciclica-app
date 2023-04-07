import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule]
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader: boolean = true;
  @Input() hasFooter: boolean = false;

  @Input() status: string = '';
  @Input() updatedDate: string = '';
  @Input() createdAt: string = '';
  @Input() notes: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit() {}

}
