
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [FlexLayoutModule,MatButtonModule,
     MatSliderModule, MatCardModule, MatToolbarModule, MatSelectModule, MatInputModule],
  exports: [FlexLayoutModule, MatButtonModule,
     MatSliderModule, MatCardModule, MatToolbarModule,MatSelectModule, MatInputModule],
})
export class MaterialModule { }
