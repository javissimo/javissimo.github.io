import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '@components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BlogPostModule } from '@pages/blog-post/blog-post.module';
import { TagsViewModule } from '@components/tags-view/tags-view.module';
import { ArticleModule } from '@components/article/article.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScullyLibModule,
    ComponentsModule,
    BlogPostModule,
    TagsViewModule,
    ArticleModule
  ]
})
export class HomeModule {}
