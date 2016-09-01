import { Component, Input } from '@angular/core';
export var GeneratedComponent000096 = (function () {
    function GeneratedComponent000096() {
        this.myName = "000096";
    }
    GeneratedComponent000096.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000096',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000192 [parentName]=\"myName\"></my-comp-000192>\n      <my-comp-000193 [parentName]=\"myName\"></my-comp-000193>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000096.ctorParameters = [];
    GeneratedComponent000096.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000096;
}());
