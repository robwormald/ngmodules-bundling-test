import { Component, Input } from '@angular/core';
export var GeneratedComponent000112 = (function () {
    function GeneratedComponent000112() {
        this.myName = "000112";
    }
    GeneratedComponent000112.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000112',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000224 [parentName]=\"myName\"></my-comp-000224>\n      <my-comp-000225 [parentName]=\"myName\"></my-comp-000225>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000112.ctorParameters = [];
    GeneratedComponent000112.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000112;
}());
