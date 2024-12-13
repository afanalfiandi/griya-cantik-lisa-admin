import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, BannerRoutingModule],
})
export class BannerModule {}
