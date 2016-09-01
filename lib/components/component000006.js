import { Component, Input } from '@angular/core';
export var GeneratedComponent000006 = (function () {
    function GeneratedComponent000006() {
        this.myName = "000006";
    }
    GeneratedComponent000006.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000006',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000012 [parentName]=\"myName\"></my-comp-000012>\n      <my-comp-000013 [parentName]=\"myName\"></my-comp-000013>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000006.ctorParameters = [];
    GeneratedComponent000006.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000006;
}());
