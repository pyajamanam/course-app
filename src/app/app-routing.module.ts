import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses', loadChildren: () => import(`./feature/courses/courses.module`)
      .then(module => module.CoursesModule
      )
  },
  {
    path: 'login', loadChildren: () => import(`./feature/login/login.module`)
      .then(module => module.LoginModule
      )
  },
  {
    path: 'registration', loadChildren: () => import(`./feature/registration/registration.module`)
      .then(module => module.RegistrationModule
      )
  },
  {
    path: 'courses', loadChildren: () => import(`./feature/courses/courses.module`)
      .then(module => module.CoursesModule
      )
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
