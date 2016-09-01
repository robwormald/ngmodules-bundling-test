import { Component, Input } from '@angular/core';
export var GeneratedComponent000124 = (function () {
    function GeneratedComponent000124() {
        this.myName = "000124";
    }
    GeneratedComponent000124.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000124',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000248 [parentName]=\"myName\"></my-comp-000248>\n      <my-comp-000249 [parentName]=\"myName\"></my-comp-000249>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000124.ctorParameters = [];
    GeneratedComponent000124.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000124;
}());
