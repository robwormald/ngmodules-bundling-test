import { Component, Input } from '@angular/core';
export var GeneratedComponent000133 = (function () {
    function GeneratedComponent000133() {
        this.myName = "000133";
    }
    GeneratedComponent000133.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000133',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000266 [parentName]=\"myName\"></my-comp-000266>\n      <my-comp-000267 [parentName]=\"myName\"></my-comp-000267>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000133.ctorParameters = [];
    GeneratedComponent000133.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000133;
}());
