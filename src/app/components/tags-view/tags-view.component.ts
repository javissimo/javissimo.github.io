import { Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-tags-view',
  templateUrl: './tags-view.component.html',
  styleUrls: ['./tags-view.component.scss'],
})
export class TagsViewComponent {
  @Input() tags: Observable<ScullyRoute[]>;
  @Input() limit;

  constructor(public themeService: ThemeService) {}
}
