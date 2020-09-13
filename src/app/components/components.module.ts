import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PipesModule } from '@pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, PipesModule, MarkdownModule.forChild(), RouterModule]
})
export class ComponentsModule {}
