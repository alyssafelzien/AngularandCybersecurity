import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitizationExampleComponent } from './sanitization-example/sanitization-example.component';

const routes: Routes = [
  { path: 'sanitization-example', component: SanitizationExampleComponent }
]

// The router shows or hides view hierarchies (so we get naviagation likey you would on a typical website with multiple pages)
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
