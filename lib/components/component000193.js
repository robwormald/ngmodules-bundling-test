import { Component, Input } from '@angular/core';
export var GeneratedComponent000193 = (function () {
    function GeneratedComponent000193() {
        this.myName = "000193";
    }
    GeneratedComponent000193.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000193',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000386 [parentName]=\"myName\"></my-comp-000386>\n      <my-comp-000387 [parentName]=\"myName\"></my-comp-000387>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000193.ctorParameters = [];
    GeneratedComponent000193.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000193;
}());
