import { Component, Input } from '@angular/core';
export var GeneratedComponent000201 = (function () {
    function GeneratedComponent000201() {
        this.myName = "000201";
    }
    GeneratedComponent000201.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000201',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000402 [parentName]=\"myName\"></my-comp-000402>\n      <my-comp-000403 [parentName]=\"myName\"></my-comp-000403>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000201.ctorParameters = [];
    GeneratedComponent000201.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000201;
}());
