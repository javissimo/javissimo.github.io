import { SimpleAnalyticsService } from '@services/simple-analytics.service';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'niz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  private _open = false;
  constructor(
    private el: ElementRef<HTMLElement>,
    private sa: SimpleAnalyticsService
  ) {}

  @HostBinding('class.open') get isOpen(): boolean {
    return this._open;
  }

  open(): void {
    this._open = true;
  }
  @HostListener('click') close(): void {
    this._open = false;
  }

  toggle(): void {
    this.sa.event('mobile_menu_toggle');
    this._open = !this._open;
  }
}
