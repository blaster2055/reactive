import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='reactive'
  addUserForm: FormGroup | undefined;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(PAT_NAME)]],
      email: ['', [Validators.required, Validators.pattern(PAT_EMAIL)]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
    
    submitUser() {

      this.isFormSubmitted = true;
  
      // Return if form is invalid
      if (this.addUserForm.invalid) {
        return;
      }
      console.log('Submit', this.addUserForm.value);
    }
  
  }

   

