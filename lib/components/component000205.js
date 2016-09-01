import { Component, Input } from '@angular/core';
export var GeneratedComponent000205 = (function () {
    function GeneratedComponent000205() {
        this.myName = "000205";
    }
    GeneratedComponent000205.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000205',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000410 [parentName]=\"myName\"></my-comp-000410>\n      <my-comp-000411 [parentName]=\"myName\"></my-comp-000411>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000205.ctorParameters = [];
    GeneratedComponent000205.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000205;
}());
