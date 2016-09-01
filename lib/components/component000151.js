import { Component, Input } from '@angular/core';
export var GeneratedComponent000151 = (function () {
    function GeneratedComponent000151() {
        this.myName = "000151";
    }
    GeneratedComponent000151.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000151',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000302 [parentName]=\"myName\"></my-comp-000302>\n      <my-comp-000303 [parentName]=\"myName\"></my-comp-000303>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000151.ctorParameters = [];
    GeneratedComponent000151.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000151;
}());
