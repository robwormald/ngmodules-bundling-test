import { Component, Input } from '@angular/core';
export var GeneratedComponent000212 = (function () {
    function GeneratedComponent000212() {
        this.myName = "000212";
    }
    GeneratedComponent000212.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000212',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000424 [parentName]=\"myName\"></my-comp-000424>\n      <my-comp-000425 [parentName]=\"myName\"></my-comp-000425>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000212.ctorParameters = [];
    GeneratedComponent000212.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000212;
}());
