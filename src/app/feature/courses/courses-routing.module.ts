import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseCardEditComponent } from './course-card-edit/course-card-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
const routes: Routes = [
  {
    path: 'course/add',
  component : CourseAddComponent},
  {
    path: 'course/:id',
  component : CourseCardEditComponent},
  {
    path: 'courseslist',
  component : CourseListComponent},
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CoursesRoutingModule { }