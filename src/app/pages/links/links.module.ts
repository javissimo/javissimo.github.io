import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '@components/components.module';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';

@NgModule({
  imports: [
    BlogPostModule,
    CommonModule,
    ScullyLibModule,
    ComponentsModule,
  ],
  exports: [],
  providers: [],
})
export class LinksModule {}
