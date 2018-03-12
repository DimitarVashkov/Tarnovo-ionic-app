import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TsarevetsPage } from './tsarevets';

@NgModule({
  declarations: [
    TsarevetsPage,
  ],
  imports: [
    IonicPageModule.forChild(TsarevetsPage),
  ],
})
export class TsarevetsPageModule {}
