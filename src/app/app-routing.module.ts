import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GitaAdhyayComponent } from './pages/gita-adhyay/gita-adhyay.component';
import { DnyaneshwariAdhyayComponent } from './pages/dnyaneshwari-adhyay/dnyaneshwari-adhyay.component';
import { ShlokComponent } from './pages/shlok/shlok.component';
import { OviComponent } from './pages/ovi/ovi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gita', component: GitaAdhyayComponent },
  { path: 'dnyaneshwari', component: DnyaneshwariAdhyayComponent },
  { path: 'gita/adhyay/:adhyay_no', component: ShlokComponent},
  { path: 'dnyaneshwari/adhyay/:adhyay_no', component: OviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
