import { Component, Input } from '@angular/core';
export var GeneratedComponent000058 = (function () {
    function GeneratedComponent000058() {
        this.myName = "000058";
    }
    GeneratedComponent000058.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000058',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000116 [parentName]=\"myName\"></my-comp-000116>\n      <my-comp-000117 [parentName]=\"myName\"></my-comp-000117>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000058.ctorParameters = [];
    GeneratedComponent000058.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000058;
}());
