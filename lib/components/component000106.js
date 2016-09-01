import { Component, Input } from '@angular/core';
export var GeneratedComponent000106 = (function () {
    function GeneratedComponent000106() {
        this.myName = "000106";
    }
    GeneratedComponent000106.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000106',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000212 [parentName]=\"myName\"></my-comp-000212>\n      <my-comp-000213 [parentName]=\"myName\"></my-comp-000213>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000106.ctorParameters = [];
    GeneratedComponent000106.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000106;
}());
