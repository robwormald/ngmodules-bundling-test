import { Component, Input } from '@angular/core';
export var GeneratedComponent000237 = (function () {
    function GeneratedComponent000237() {
        this.myName = "000237";
    }
    GeneratedComponent000237.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000237',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000474 [parentName]=\"myName\"></my-comp-000474>\n      <my-comp-000475 [parentName]=\"myName\"></my-comp-000475>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000237.ctorParameters = [];
    GeneratedComponent000237.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000237;
}());
