import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { tap } from 'rxjs/operators';
import { shortcut } from '@utils/shortcuts';
import { KeyCode } from '@utils/keycodes';
import { merge, Observable } from 'rxjs';
import { ScullyContentService } from '@services/scully-content.service';
import { ScullyRoute } from '@scullyio/ng-lib';
import { GoogleAnalyticsService } from '@services/google-analytics.service';
import { NizSearch } from '@components/search/search.component';
import { FooterSection } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  copyleftUrl = 'https://creativecommons.org/licenses/by-nc-nd/2.0/deed.es';
  current$: Observable<ScullyRoute>;
  createdWithSvgSources = [
    'assets/stack/angular.svg',
    'assets/stack/scully.svg',
    'assets/stack/tailwind-css.svg'
  ];

  footerSections: FooterSection[] = [
    {
      title: 'where to find me',
      links: [
        {
          title: 'javierpm',
          url: 'mailto:info@javier.pm',
          svg: 'assets/img/linkedin.svg',
          external: true
        },
        {
          title: ' javissimo',
          url: 'https://github.com/javissimo',
          svg: 'assets/img/github-white.svg',
          external: true
        },

        {
          title: 'info@javier.pm',
          url: 'mailto:info@javier.pm',
          svg: 'assets/img/mail.svg',
          external: true
        }
      ]
    },
    {
      title: 'meta',
      links: [
        {
          title: 'articles',
          url: '/blog/',
          svg: 'assets/img/blog-white.svg'
        },
        {
          title: 'tags',
          url: '/tags/',
          svg: 'assets/img/tags-white.svg'
        }
      ]
    }
  ];

  constructor(
    public themeService: ThemeService,
    private content: ScullyContentService,
    public analytics: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();

    merge(
      shortcut([KeyCode.ControlLeft, KeyCode.KeyT]),
      shortcut([KeyCode.ControlRight, KeyCode.KeyT])
    )
      .pipe(
        tap(() =>
          this.analytics.trigger(
            'theme toggle',
            'shortcut',
            `from ${this.themeService.theme} to ${
              this.themeService.theme === 'dark' ? 'light' : 'dark'
            }`
          )
        ),
        tap(() => this.themeService.toggleTheme())
      )
      .subscribe();

    this.current$ = this.content.getCurrent();
  }

  scrollToNewsletter() {
    this.analytics.trigger('newsletter click', 'engagement');
  }

  openSearch(search: NizSearch) {
    search.openSearch();
    this.analytics.trigger('search click', 'engagement');
  }

  toggleTheme() {
    this.analytics.trigger(
      'theme toggle',
      'engagement',
      `from ${this.themeService.theme} to ${this.themeService.theme === 'dark' ? 'light' : 'dark'}`
    );
    this.themeService.toggleTheme();
  }
}
