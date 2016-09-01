import { Component, Input } from '@angular/core';
export var GeneratedComponent000108 = (function () {
    function GeneratedComponent000108() {
        this.myName = "000108";
    }
    GeneratedComponent000108.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000108',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000216 [parentName]=\"myName\"></my-comp-000216>\n      <my-comp-000217 [parentName]=\"myName\"></my-comp-000217>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000108.ctorParameters = [];
    GeneratedComponent000108.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000108;
}());
