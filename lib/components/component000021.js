import { Component, Input } from '@angular/core';
export var GeneratedComponent000021 = (function () {
    function GeneratedComponent000021() {
        this.myName = "000021";
    }
    GeneratedComponent000021.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000021',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000042 [parentName]=\"myName\"></my-comp-000042>\n      <my-comp-000043 [parentName]=\"myName\"></my-comp-000043>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000021.ctorParameters = [];
    GeneratedComponent000021.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000021;
}());
