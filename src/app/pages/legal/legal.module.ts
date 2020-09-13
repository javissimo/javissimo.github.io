import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal-routing.module';
import { ScullyContentModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  declarations: [LegalComponent],
  imports: [CommonModule, LegalRoutingModule, ScullyContentModule, ComponentsModule]
})
export class LegalModule {}
