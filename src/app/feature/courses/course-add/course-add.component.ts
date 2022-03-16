import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { alphaNumeric } from 'src/app/shared/directives/alfanumeric-only.util';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent  {

  public createCourse: FormGroup;
  public isSubmited = false;
  public duration: any;

  constructor() {
    this.createCourse = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      authors: new FormArray([]),
      addAuthor: new FormControl("", [Validators.required,alphaNumeric]),
      duration: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  onSubmit() {
    this.isSubmited = true;
    console.log(this.createCourse);
  }

  onAddAuthor() {
    const result = this.createCourse.get("addAuthor")?.value || "";

    (<FormArray>this.createCourse.get("authors")).push(new FormControl(result));
    this.createCourse.get("addAuthor")?.reset();
  }

  getAuthors() {
    return this.createCourse.get("authors")?.value;
  }

  deleteAuthor(i: number) {
    const changedAuthorsArr: string[] = [
      ...this.createCourse.get("authors")?.value,
    ];

    changedAuthorsArr.splice(i, 1);
    console.log(changedAuthorsArr);

    this.createCourse.get("authors")?.reset();

    changedAuthorsArr.forEach((value) => {
      (<FormArray>this.createCourse.get("authors")).push(
        new FormControl(value)
      );
    });
  }


}
