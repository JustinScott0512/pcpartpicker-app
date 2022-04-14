import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: 'register-layout',
    templateUrl: 'register-layout.component.html',
    styleUrls: ['register-layout.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class RegisterLayoutComponent{
    signUpForm: FormGroup = this.formBuilder.group({
        email: "",
        password: "",
            });
    
      constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService
      ) { }
    
      signUp() {
        this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password);
      }
}