import { Component, Input } from '@angular/core';
export var GeneratedComponent000235 = (function () {
    function GeneratedComponent000235() {
        this.myName = "000235";
    }
    GeneratedComponent000235.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000235',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000470 [parentName]=\"myName\"></my-comp-000470>\n      <my-comp-000471 [parentName]=\"myName\"></my-comp-000471>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000235.ctorParameters = [];
    GeneratedComponent000235.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000235;
}());
