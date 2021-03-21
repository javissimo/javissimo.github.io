import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'niz-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class NizToolbar {
  @HostBinding('class') get class(): string {
    return 'w-full mx-auto flex items-center justify-between';
  }
}
