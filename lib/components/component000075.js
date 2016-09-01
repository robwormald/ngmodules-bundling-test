import { Component, Input } from '@angular/core';
export var GeneratedComponent000075 = (function () {
    function GeneratedComponent000075() {
        this.myName = "000075";
    }
    GeneratedComponent000075.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000075',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000150 [parentName]=\"myName\"></my-comp-000150>\n      <my-comp-000151 [parentName]=\"myName\"></my-comp-000151>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000075.ctorParameters = [];
    GeneratedComponent000075.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000075;
}());
