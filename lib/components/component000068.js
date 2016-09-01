import { Component, Input } from '@angular/core';
export var GeneratedComponent000068 = (function () {
    function GeneratedComponent000068() {
        this.myName = "000068";
    }
    GeneratedComponent000068.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000068',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000136 [parentName]=\"myName\"></my-comp-000136>\n      <my-comp-000137 [parentName]=\"myName\"></my-comp-000137>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000068.ctorParameters = [];
    GeneratedComponent000068.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000068;
}());
