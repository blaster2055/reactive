import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='reactive'
  addUserForm: FormGroup ;
  isFormSubmitted = false;
  urlParams: any
  constructor(
  ) { }

  ngOnInit(): void {

    
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.addUserForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl("", Validators.required),
      password:new FormControl("", [Validators.required, Validators.minLength(8)])
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
    closeModal(close : any){

    }
  }

   

