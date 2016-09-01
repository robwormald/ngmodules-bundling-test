import { Component, Input } from '@angular/core';
export var GeneratedComponent000238 = (function () {
    function GeneratedComponent000238() {
        this.myName = "000238";
    }
    GeneratedComponent000238.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000238',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000476 [parentName]=\"myName\"></my-comp-000476>\n      <my-comp-000477 [parentName]=\"myName\"></my-comp-000477>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000238.ctorParameters = [];
    GeneratedComponent000238.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000238;
}());
