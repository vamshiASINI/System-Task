import { Component, OnInit } from '@angular/core';
import { contact } from '../model/user';
import swal from 'sweetalert';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  contact:contact;
  name: any;
  email: any;
  mobile: any;
  message: any;
  constructor() { 
  this.contact=new contact()
  }
  count: number = 0
  keyPress(event: any) {
    this.count = 0
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSubmit(contactForm){
    if(contactForm.valid){
      localStorage.setItem('name',this.contact.name)
      localStorage.setItem('email',this.contact.email)
      localStorage.setItem('mobile',this.contact.mobile)
      localStorage.setItem('message',this.contact.message);
      console.log(this.contact);
      contactForm.reset();
    swal("success","thank you for your feedback",'success')
    }
    else{
      swal("oops!","please fill the details","error")
    }

  }
  ngOnInit(): void {
    localStorage.clear();

  }


}
