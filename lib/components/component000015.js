import { Component, Input } from '@angular/core';
export var GeneratedComponent000015 = (function () {
    function GeneratedComponent000015() {
        this.myName = "000015";
    }
    GeneratedComponent000015.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000015',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000030 [parentName]=\"myName\"></my-comp-000030>\n      <my-comp-000031 [parentName]=\"myName\"></my-comp-000031>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000015.ctorParameters = [];
    GeneratedComponent000015.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000015;
}());
