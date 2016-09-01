import { Component, Input } from '@angular/core';
export var GeneratedComponent000067 = (function () {
    function GeneratedComponent000067() {
        this.myName = "000067";
    }
    GeneratedComponent000067.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000067',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000134 [parentName]=\"myName\"></my-comp-000134>\n      <my-comp-000135 [parentName]=\"myName\"></my-comp-000135>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000067.ctorParameters = [];
    GeneratedComponent000067.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000067;
}());
