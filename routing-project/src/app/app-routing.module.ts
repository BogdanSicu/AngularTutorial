import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    // avand : inainte de id presupune faptul ca o sa putem face load la users/ 'orice am eu chef' va fi considerat ca acel id
    { path: ':id/:name', component: UserComponent }, 
  ] }, 
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent }, 
    { path: ':id/edit', component: EditServerComponent }, 
  ] },
  {path: 'not-found', component: PageNotFoundComponent },
  // path.ul ** prinde orice url, d.aia trebuie pus ultimul deoarece orice url care nu este specificat inaintea sa va fi prins de ** -> wild card
  {path: '**', redirectTo: 'not-found' }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
