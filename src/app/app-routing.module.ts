import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./pages/tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'ignore',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
