import { Component, Input } from '@angular/core';
export var GeneratedComponent000110 = (function () {
    function GeneratedComponent000110() {
        this.myName = "000110";
    }
    GeneratedComponent000110.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000110',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000220 [parentName]=\"myName\"></my-comp-000220>\n      <my-comp-000221 [parentName]=\"myName\"></my-comp-000221>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000110.ctorParameters = [];
    GeneratedComponent000110.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000110;
}());
