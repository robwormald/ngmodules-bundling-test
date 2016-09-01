import { Component, Input } from '@angular/core';
export var GeneratedComponent000117 = (function () {
    function GeneratedComponent000117() {
        this.myName = "000117";
    }
    GeneratedComponent000117.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000117',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000234 [parentName]=\"myName\"></my-comp-000234>\n      <my-comp-000235 [parentName]=\"myName\"></my-comp-000235>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000117.ctorParameters = [];
    GeneratedComponent000117.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000117;
}());
