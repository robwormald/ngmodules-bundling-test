import { Component, Input } from '@angular/core';
export var GeneratedComponent000105 = (function () {
    function GeneratedComponent000105() {
        this.myName = "000105";
    }
    GeneratedComponent000105.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000105',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000210 [parentName]=\"myName\"></my-comp-000210>\n      <my-comp-000211 [parentName]=\"myName\"></my-comp-000211>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000105.ctorParameters = [];
    GeneratedComponent000105.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000105;
}());
