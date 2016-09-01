import { Component, Input } from '@angular/core';
export var GeneratedComponent000010 = (function () {
    function GeneratedComponent000010() {
        this.myName = "000010";
    }
    GeneratedComponent000010.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000010',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000020 [parentName]=\"myName\"></my-comp-000020>\n      <my-comp-000021 [parentName]=\"myName\"></my-comp-000021>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000010.ctorParameters = [];
    GeneratedComponent000010.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000010;
}());
