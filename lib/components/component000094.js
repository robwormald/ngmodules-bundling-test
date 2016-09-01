import { Component, Input } from '@angular/core';
export var GeneratedComponent000094 = (function () {
    function GeneratedComponent000094() {
        this.myName = "000094";
    }
    GeneratedComponent000094.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000094',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000188 [parentName]=\"myName\"></my-comp-000188>\n      <my-comp-000189 [parentName]=\"myName\"></my-comp-000189>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000094.ctorParameters = [];
    GeneratedComponent000094.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000094;
}());
