import { Component, Input } from '@angular/core';
export var GeneratedComponent000200 = (function () {
    function GeneratedComponent000200() {
        this.myName = "000200";
    }
    GeneratedComponent000200.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000200',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000400 [parentName]=\"myName\"></my-comp-000400>\n      <my-comp-000401 [parentName]=\"myName\"></my-comp-000401>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000200.ctorParameters = [];
    GeneratedComponent000200.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000200;
}());
