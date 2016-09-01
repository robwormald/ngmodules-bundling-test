import { Component, Input } from '@angular/core';
export var GeneratedComponent000071 = (function () {
    function GeneratedComponent000071() {
        this.myName = "000071";
    }
    GeneratedComponent000071.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000071',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000142 [parentName]=\"myName\"></my-comp-000142>\n      <my-comp-000143 [parentName]=\"myName\"></my-comp-000143>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000071.ctorParameters = [];
    GeneratedComponent000071.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000071;
}());
