import { Component, Input } from '@angular/core';
export var GeneratedComponent000098 = (function () {
    function GeneratedComponent000098() {
        this.myName = "000098";
    }
    GeneratedComponent000098.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000098',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000196 [parentName]=\"myName\"></my-comp-000196>\n      <my-comp-000197 [parentName]=\"myName\"></my-comp-000197>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000098.ctorParameters = [];
    GeneratedComponent000098.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000098;
}());
