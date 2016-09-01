import { Component, Input } from '@angular/core';
export var GeneratedComponent000207 = (function () {
    function GeneratedComponent000207() {
        this.myName = "000207";
    }
    GeneratedComponent000207.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000207',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000414 [parentName]=\"myName\"></my-comp-000414>\n      <my-comp-000415 [parentName]=\"myName\"></my-comp-000415>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000207.ctorParameters = [];
    GeneratedComponent000207.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000207;
}());
