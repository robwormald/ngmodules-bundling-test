import { Component, Input } from '@angular/core';
export var GeneratedComponent000233 = (function () {
    function GeneratedComponent000233() {
        this.myName = "000233";
    }
    GeneratedComponent000233.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000233',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000466 [parentName]=\"myName\"></my-comp-000466>\n      <my-comp-000467 [parentName]=\"myName\"></my-comp-000467>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000233.ctorParameters = [];
    GeneratedComponent000233.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000233;
}());
