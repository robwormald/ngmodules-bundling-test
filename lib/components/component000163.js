import { Component, Input } from '@angular/core';
export var GeneratedComponent000163 = (function () {
    function GeneratedComponent000163() {
        this.myName = "000163";
    }
    GeneratedComponent000163.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000163',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000326 [parentName]=\"myName\"></my-comp-000326>\n      <my-comp-000327 [parentName]=\"myName\"></my-comp-000327>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000163.ctorParameters = [];
    GeneratedComponent000163.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000163;
}());
