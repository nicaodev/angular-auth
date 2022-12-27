import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/componentes/auth/auth.module').then(m => m.AuthModule), //Lazy loading
  },
  {
    path: 'admin',
    loadChildren: () => import('./componentes/admin/admin.module').then(a => a.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
