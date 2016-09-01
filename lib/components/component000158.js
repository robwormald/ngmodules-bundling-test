import { Component, Input } from '@angular/core';
export var GeneratedComponent000158 = (function () {
    function GeneratedComponent000158() {
        this.myName = "000158";
    }
    GeneratedComponent000158.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000158',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000316 [parentName]=\"myName\"></my-comp-000316>\n      <my-comp-000317 [parentName]=\"myName\"></my-comp-000317>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000158.ctorParameters = [];
    GeneratedComponent000158.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000158;
}());
