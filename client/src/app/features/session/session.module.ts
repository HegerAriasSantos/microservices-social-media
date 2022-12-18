import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../../shared/material/material.module';

const components = [LoginComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SessionRoutingModule, MaterialModule],
  exports: [...components],
})
export class SessionModule {}
