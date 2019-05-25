import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'
import { TrainingPanelComponent } from './training-panel/training-panel.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'training', component: TrainingPanelComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
