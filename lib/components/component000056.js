import { Component, Input } from '@angular/core';
export var GeneratedComponent000056 = (function () {
    function GeneratedComponent000056() {
        this.myName = "000056";
    }
    GeneratedComponent000056.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000056',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000112 [parentName]=\"myName\"></my-comp-000112>\n      <my-comp-000113 [parentName]=\"myName\"></my-comp-000113>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000056.ctorParameters = [];
    GeneratedComponent000056.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000056;
}());
