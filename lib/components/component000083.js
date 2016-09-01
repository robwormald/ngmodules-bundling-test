import { Component, Input } from '@angular/core';
export var GeneratedComponent000083 = (function () {
    function GeneratedComponent000083() {
        this.myName = "000083";
    }
    GeneratedComponent000083.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000083',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000166 [parentName]=\"myName\"></my-comp-000166>\n      <my-comp-000167 [parentName]=\"myName\"></my-comp-000167>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000083.ctorParameters = [];
    GeneratedComponent000083.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000083;
}());
