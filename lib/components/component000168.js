import { Component, Input } from '@angular/core';
export var GeneratedComponent000168 = (function () {
    function GeneratedComponent000168() {
        this.myName = "000168";
    }
    GeneratedComponent000168.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000168',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000336 [parentName]=\"myName\"></my-comp-000336>\n      <my-comp-000337 [parentName]=\"myName\"></my-comp-000337>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000168.ctorParameters = [];
    GeneratedComponent000168.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000168;
}());
