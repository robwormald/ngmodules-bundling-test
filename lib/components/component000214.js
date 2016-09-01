import { Component, Input } from '@angular/core';
export var GeneratedComponent000214 = (function () {
    function GeneratedComponent000214() {
        this.myName = "000214";
    }
    GeneratedComponent000214.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000214',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000428 [parentName]=\"myName\"></my-comp-000428>\n      <my-comp-000429 [parentName]=\"myName\"></my-comp-000429>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000214.ctorParameters = [];
    GeneratedComponent000214.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000214;
}());
