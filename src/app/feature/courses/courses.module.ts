import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";
import { CourseAddComponent } from './course-add/course-add.component';
import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseCardEditComponent } from "./course-card-edit/course-card-edit.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseListModule } from "./course-list/course-list.module";

@NgModule({
  declarations: [CoursesComponent,CourseCardComponent, 
    CourseAddComponent,CourseListComponent,
    CourseCardEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,CourseListModule
  ],
  exports: [
    SharedModule,
    CoursesRoutingModule,
  ],
})
export class CoursesModule {}