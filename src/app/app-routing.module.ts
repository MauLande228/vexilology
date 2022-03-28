import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagsComponent } from './flags/flags.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  { path: 'flags', component: FlagsComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '/flags', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
