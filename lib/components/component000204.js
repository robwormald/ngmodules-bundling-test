import { Component, Input } from '@angular/core';
export var GeneratedComponent000204 = (function () {
    function GeneratedComponent000204() {
        this.myName = "000204";
    }
    GeneratedComponent000204.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000204',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000408 [parentName]=\"myName\"></my-comp-000408>\n      <my-comp-000409 [parentName]=\"myName\"></my-comp-000409>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000204.ctorParameters = [];
    GeneratedComponent000204.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000204;
}());
