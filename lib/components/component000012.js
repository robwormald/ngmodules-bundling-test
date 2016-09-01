import { Component, Input } from '@angular/core';
export var GeneratedComponent000012 = (function () {
    function GeneratedComponent000012() {
        this.myName = "000012";
    }
    GeneratedComponent000012.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000012',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000024 [parentName]=\"myName\"></my-comp-000024>\n      <my-comp-000025 [parentName]=\"myName\"></my-comp-000025>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000012.ctorParameters = [];
    GeneratedComponent000012.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000012;
}());
