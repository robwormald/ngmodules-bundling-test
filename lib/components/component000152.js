import { Component, Input } from '@angular/core';
export var GeneratedComponent000152 = (function () {
    function GeneratedComponent000152() {
        this.myName = "000152";
    }
    GeneratedComponent000152.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000152',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000304 [parentName]=\"myName\"></my-comp-000304>\n      <my-comp-000305 [parentName]=\"myName\"></my-comp-000305>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000152.ctorParameters = [];
    GeneratedComponent000152.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000152;
}());
