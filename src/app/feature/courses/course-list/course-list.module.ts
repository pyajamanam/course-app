import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseCardComponent } from "../course-card/course-card.component";

@NgModule({
  declarations: [CourseCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    SharedModule,
  ],
})
export class CourseListModule {}