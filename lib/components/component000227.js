import { Component, Input } from '@angular/core';
export var GeneratedComponent000227 = (function () {
    function GeneratedComponent000227() {
        this.myName = "000227";
    }
    GeneratedComponent000227.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000227',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000454 [parentName]=\"myName\"></my-comp-000454>\n      <my-comp-000455 [parentName]=\"myName\"></my-comp-000455>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000227.ctorParameters = [];
    GeneratedComponent000227.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000227;
}());
