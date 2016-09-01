import { Component, Input } from '@angular/core';
export var GeneratedComponent000208 = (function () {
    function GeneratedComponent000208() {
        this.myName = "000208";
    }
    GeneratedComponent000208.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000208',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000416 [parentName]=\"myName\"></my-comp-000416>\n      <my-comp-000417 [parentName]=\"myName\"></my-comp-000417>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000208.ctorParameters = [];
    GeneratedComponent000208.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000208;
}());
