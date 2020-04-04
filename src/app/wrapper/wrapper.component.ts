import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IssueLoggingService} from '../services/issue-logging.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html'
})

/*
This wrapper class is needed because if all the code is written in app.component.ts, the service will keep getting refreshed, causing input
fields to not populate properly.
 */
export class WrapperComponent implements OnInit {

  @ViewChild('newFieldInput') newFieldInput: ElementRef;

  formItems: any[];

  constructor(private issueLoggingService: IssueLoggingService) {
  }

  ngOnInit(): void {
    this.formItems = this.issueLoggingService.getFormItems();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // Add the new item
      const idValue = this.generateId(this.newFieldInput.nativeElement.value);

      this.formItems.push({
        type: 'textbox',
        id: idValue,
        label: this.newFieldInput.nativeElement.value
      });

      // Reset the value of the input field
      this.newFieldInput.nativeElement.value = '';

      // TODO(jackson): Transfer focus to the new field
    }
  }

  private generateId(camelCasedString: string): string {
    return camelCasedString.split(' ').join('-').toLowerCase();
  }

}
