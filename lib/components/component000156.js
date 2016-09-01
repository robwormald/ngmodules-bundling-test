import { Component, Input } from '@angular/core';
export var GeneratedComponent000156 = (function () {
    function GeneratedComponent000156() {
        this.myName = "000156";
    }
    GeneratedComponent000156.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000156',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000312 [parentName]=\"myName\"></my-comp-000312>\n      <my-comp-000313 [parentName]=\"myName\"></my-comp-000313>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000156.ctorParameters = [];
    GeneratedComponent000156.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000156;
}());
