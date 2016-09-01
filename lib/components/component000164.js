import { Component, Input } from '@angular/core';
export var GeneratedComponent000164 = (function () {
    function GeneratedComponent000164() {
        this.myName = "000164";
    }
    GeneratedComponent000164.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000164',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000328 [parentName]=\"myName\"></my-comp-000328>\n      <my-comp-000329 [parentName]=\"myName\"></my-comp-000329>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000164.ctorParameters = [];
    GeneratedComponent000164.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000164;
}());
