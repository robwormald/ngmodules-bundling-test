import { Component, Input } from '@angular/core';
export var GeneratedComponent000191 = (function () {
    function GeneratedComponent000191() {
        this.myName = "000191";
    }
    GeneratedComponent000191.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000191',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000382 [parentName]=\"myName\"></my-comp-000382>\n      <my-comp-000383 [parentName]=\"myName\"></my-comp-000383>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000191.ctorParameters = [];
    GeneratedComponent000191.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000191;
}());
