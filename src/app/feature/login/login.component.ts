import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public model: any = {};

  public emailValid = true;
  public passwordValid = true;
lwidth:number=40;
lheight :number=40;
  onSubmit(loginForm: NgForm) {
    console.log("form: ", loginForm);
  }
}
