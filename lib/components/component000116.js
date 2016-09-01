import { Component, Input } from '@angular/core';
export var GeneratedComponent000116 = (function () {
    function GeneratedComponent000116() {
        this.myName = "000116";
    }
    GeneratedComponent000116.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000116',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000232 [parentName]=\"myName\"></my-comp-000232>\n      <my-comp-000233 [parentName]=\"myName\"></my-comp-000233>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000116.ctorParameters = [];
    GeneratedComponent000116.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000116;
}());
