import { Component, Input } from '@angular/core';
export var GeneratedComponent000247 = (function () {
    function GeneratedComponent000247() {
        this.myName = "000247";
    }
    GeneratedComponent000247.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000247',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000494 [parentName]=\"myName\"></my-comp-000494>\n      <my-comp-000495 [parentName]=\"myName\"></my-comp-000495>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000247.ctorParameters = [];
    GeneratedComponent000247.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000247;
}());
