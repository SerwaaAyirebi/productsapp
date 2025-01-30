import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navbarComponent} from './navbar/navbar.component';
import { ProdpageComponent } from './prodmod/prodpage/prodpage.component';

const routes: Routes = [
  // {path:"homepage" , component:navbarComponent}
  // ,{path:"prodpage" , component:ProdpageComponent}
  {path:'',pathMatch:'full',redirectTo:'userpage'},
  {
    path: 'prodpage',
    loadChildren: () => import('./prodmod/prodmod.module').then(m => m.ProdmodModule)
  },
  {
    path: 'userpage',
    loadChildren: () => import('./usermod/usermod.module').then(m => m.UsermodModule)
  },
  {
    path: 'transpage',
    loadChildren: () => import('./transmod/transmod.module').then(m => m.TransmodModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
