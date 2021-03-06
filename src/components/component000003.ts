// Code generated by angular2-stress-test

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-comp-000003',
  template: `<div>
    <span>component {{myName}}, parent is {{parentName}}</span>
    <div style="padding-left: 5px">
    </div></div>
  `
})
export class GeneratedComponent000003 {
  @Input() parentName: string;
  myName: string = "000003";
}
