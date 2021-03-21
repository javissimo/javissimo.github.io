import { Component, Input } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'niz-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {
  @Input() href: string;
  @Input() type: string;

  constructor(public themeService: ThemeService) {}
}
