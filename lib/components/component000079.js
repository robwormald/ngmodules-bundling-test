import { Component, Input } from '@angular/core';
export var GeneratedComponent000079 = (function () {
    function GeneratedComponent000079() {
        this.myName = "000079";
    }
    GeneratedComponent000079.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000079',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000158 [parentName]=\"myName\"></my-comp-000158>\n      <my-comp-000159 [parentName]=\"myName\"></my-comp-000159>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000079.ctorParameters = [];
    GeneratedComponent000079.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000079;
}());
