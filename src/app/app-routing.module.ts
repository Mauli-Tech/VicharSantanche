import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GitaAdhyayComponent } from './pages/gita-adhyay/gita-adhyay.component';
import { DnyaneshwariAdhyayComponent } from './pages/dnyaneshwari-adhyay/dnyaneshwari-adhyay.component';
import { ShlokComponent } from './pages/shlok/shlok.component';
import { OviComponent } from './pages/ovi/ovi.component';
import { ShriramcharitmanasKandComponent } from './pages/shriramcharitmanas-kand/shriramcharitmanas-kand.component';
import { SopanComponent } from './pages/sopan/sopan.component';
import { ChaupaiComponent } from './pages/chaupai/chaupai.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gita', component: GitaAdhyayComponent },
  { path: 'dnyaneshwari', component: DnyaneshwariAdhyayComponent },
  { path: 'gita/adhyay/:adhyay_no', component: ShlokComponent},
  { path: 'dnyaneshwari/adhyay/:adhyay_no', component: OviComponent},
  { path: 'shriramcharitmanas', component: ShriramcharitmanasKandComponent},
  { path: 'shriramcharitmanas/kand/:kand_no', component: SopanComponent},
  { path: 'shriramcharitmanas/kand/:kand_no/:sopan_no', component: ChaupaiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
