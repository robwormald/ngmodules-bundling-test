import { Component, Input } from '@angular/core';
export var GeneratedComponent000020 = (function () {
    function GeneratedComponent000020() {
        this.myName = "000020";
    }
    GeneratedComponent000020.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000020',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000040 [parentName]=\"myName\"></my-comp-000040>\n      <my-comp-000041 [parentName]=\"myName\"></my-comp-000041>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000020.ctorParameters = [];
    GeneratedComponent000020.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000020;
}());
