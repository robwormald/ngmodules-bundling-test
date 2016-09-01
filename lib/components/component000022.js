import { Component, Input } from '@angular/core';
export var GeneratedComponent000022 = (function () {
    function GeneratedComponent000022() {
        this.myName = "000022";
    }
    GeneratedComponent000022.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000022',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000044 [parentName]=\"myName\"></my-comp-000044>\n      <my-comp-000045 [parentName]=\"myName\"></my-comp-000045>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000022.ctorParameters = [];
    GeneratedComponent000022.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000022;
}());
