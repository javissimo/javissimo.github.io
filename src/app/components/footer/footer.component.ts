import { Component, Input, HostBinding } from '@angular/core';
import { ThemeService } from '@services/theme.service';

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  title: string;
  url: string;
  svg: string;
  external?: boolean;
}

@Component({
  selector: 'niz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class NizFooter {
  now = Date.now();

  @Input() footerSections: FooterSection[];
  @Input() copyleftUrl: string;
  @Input() createdWithSvgSources: string[];

  @HostBinding('class') get classes(): string {
    return 'block';
  }

  constructor(public themeService: ThemeService) {}
}
