import { Component, Input } from '@angular/core';
export var GeneratedComponent000178 = (function () {
    function GeneratedComponent000178() {
        this.myName = "000178";
    }
    GeneratedComponent000178.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000178',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000356 [parentName]=\"myName\"></my-comp-000356>\n      <my-comp-000357 [parentName]=\"myName\"></my-comp-000357>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000178.ctorParameters = [];
    GeneratedComponent000178.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000178;
}());
