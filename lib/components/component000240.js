import { Component, Input } from '@angular/core';
export var GeneratedComponent000240 = (function () {
    function GeneratedComponent000240() {
        this.myName = "000240";
    }
    GeneratedComponent000240.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000240',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000480 [parentName]=\"myName\"></my-comp-000480>\n      <my-comp-000481 [parentName]=\"myName\"></my-comp-000481>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000240.ctorParameters = [];
    GeneratedComponent000240.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000240;
}());
