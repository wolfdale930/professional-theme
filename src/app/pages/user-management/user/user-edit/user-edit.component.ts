import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    mobile: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    confirm: new FormControl(null)
  });

  addressForm = new FormGroup({
    line1: new FormControl(null),
    line2: new FormControl(null),
    line3: new FormControl(null),
    state: new FormControl(null),
    city: new FormControl(null),
    pin: new FormControl(null)
  });

  index: number = 0;

  constructor(public modalRef: NzModalRef) {

  }

  ngOnInit(): void {
  }

  submitForm(form) {

  }

  submitAddress(form) {

  }

}
