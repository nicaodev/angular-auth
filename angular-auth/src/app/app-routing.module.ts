import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/componentes/auth/auth.module').then(m => m.AuthModule), //Lazy loading
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./componentes/admin/admin.module').then(a => a.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
