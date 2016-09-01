import { Component, Input } from '@angular/core';
export var GeneratedComponent000224 = (function () {
    function GeneratedComponent000224() {
        this.myName = "000224";
    }
    GeneratedComponent000224.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000224',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000448 [parentName]=\"myName\"></my-comp-000448>\n      <my-comp-000449 [parentName]=\"myName\"></my-comp-000449>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000224.ctorParameters = [];
    GeneratedComponent000224.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000224;
}());
