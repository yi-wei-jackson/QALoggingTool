import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueLoggingService {

  constructor() { }

  getFormItems(): any[] {
    return [
      {
        type: 'textbox',
        id: 'build-info',
        label: 'Build Info'
      }
    ];
  }
}
