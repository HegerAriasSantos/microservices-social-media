import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipePipe } from './pipes/example-pipe.pipe';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

const pipes = [ExamplePipePipe];
const components = [LoginDialogComponent];

@NgModule({
  declarations: [...pipes, ...components],
  exports: [...pipes, ...components],
  imports: [CommonModule],
})
export class SharedModule {}
