import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagsComponent } from './flags/flags.component';

const routes: Routes = [
  {path: 'flags', component: FlagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
