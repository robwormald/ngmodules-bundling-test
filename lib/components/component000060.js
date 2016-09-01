import { Component, Input } from '@angular/core';
export var GeneratedComponent000060 = (function () {
    function GeneratedComponent000060() {
        this.myName = "000060";
    }
    GeneratedComponent000060.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000060',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000120 [parentName]=\"myName\"></my-comp-000120>\n      <my-comp-000121 [parentName]=\"myName\"></my-comp-000121>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000060.ctorParameters = [];
    GeneratedComponent000060.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000060;
}());
