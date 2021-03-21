import { Component, Input } from '@angular/core';
import { Tab } from '../utils/symbols';

@Component({
  selector: 'niz-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class NizTabs {
  @Input() tabs: Tab[];
}
