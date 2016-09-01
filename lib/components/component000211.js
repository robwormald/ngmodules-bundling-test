import { Component, Input } from '@angular/core';
export var GeneratedComponent000211 = (function () {
    function GeneratedComponent000211() {
        this.myName = "000211";
    }
    GeneratedComponent000211.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000211',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000422 [parentName]=\"myName\"></my-comp-000422>\n      <my-comp-000423 [parentName]=\"myName\"></my-comp-000423>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000211.ctorParameters = [];
    GeneratedComponent000211.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000211;
}());
