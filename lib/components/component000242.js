import { Component, Input } from '@angular/core';
export var GeneratedComponent000242 = (function () {
    function GeneratedComponent000242() {
        this.myName = "000242";
    }
    GeneratedComponent000242.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000242',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000484 [parentName]=\"myName\"></my-comp-000484>\n      <my-comp-000485 [parentName]=\"myName\"></my-comp-000485>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000242.ctorParameters = [];
    GeneratedComponent000242.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000242;
}());
