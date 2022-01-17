import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: ``, loadChildren: () =>
  import('./pages/home/home.module').then(m => m.HomeModule)  
  },
  {
    path: `dancers`, loadChildren: () =>
    import('./pages/dancers/dancers.module').then(m => m.DancersModule)
  },
  {
    path: `choreographies`, loadChildren: () =>
    import('./pages/choreographies/choreographies.module').then(m => m.ChoreographiesModule)  
  },
  {
    path: `about`, loadChildren: () =>
    import('./pages/about/about.module').then(m => m.AboutModule)  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
