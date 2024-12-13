import { NgModule } from '@angular/core';
import { HeadbarComponent } from './layout/headbar/headbar.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [RouterModule, CommonModule, CoreModule],
  declarations: [HeadbarComponent, MainComponent, SidebarComponent],
  exports: [HeadbarComponent, MainComponent, SidebarComponent],
  providers: [],
})
export class SharedModule {}
