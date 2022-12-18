import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'session',
    loadChildren: () =>
      import('./features/session/session.module').then((m) => m.SessionModule),
  },
  {
    path: '**',
    redirectTo: 'session/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
