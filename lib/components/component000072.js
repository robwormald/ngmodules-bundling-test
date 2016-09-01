import { Component, Input } from '@angular/core';
export var GeneratedComponent000072 = (function () {
    function GeneratedComponent000072() {
        this.myName = "000072";
    }
    GeneratedComponent000072.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000072',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000144 [parentName]=\"myName\"></my-comp-000144>\n      <my-comp-000145 [parentName]=\"myName\"></my-comp-000145>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000072.ctorParameters = [];
    GeneratedComponent000072.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000072;
}());
