import { formContact } from './../../../models/about';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  public contactForm!: FormGroup;

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(20)]],
      number: ['', []],
      commentary: ['', [Validators.required, Validators.maxLength (300)]]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      const userContact: formContact = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        number: this.contactForm.get('number')?.value,
        commentary: this.contactForm.get('commentary')?.value,
      };
      console.log(userContact)

      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
