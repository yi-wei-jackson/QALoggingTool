import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dyn-form-group',
  templateUrl: 'dyn-form-group.component.html'
})

export class DynFormGroupComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formItems: any[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
