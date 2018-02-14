import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'administracao', component: AdministracaoComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
