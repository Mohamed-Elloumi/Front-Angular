import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [{
  path: 'create',
  pathMatch: 'full',
  component: MemberFormComponent
},{
  path: '',
  pathMatch: 'full',
  component: MemberComponent
},{
path: 'edit/:id',
pathMatch: 'full',
component: MemberFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
