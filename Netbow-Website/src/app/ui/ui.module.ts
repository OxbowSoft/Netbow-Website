import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SpinnerComponent, HeaderComponent],
  declarations: [SpinnerComponent, HeaderComponent]
})
export class UiModule { }
