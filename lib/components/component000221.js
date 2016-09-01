import { Component, Input } from '@angular/core';
export var GeneratedComponent000221 = (function () {
    function GeneratedComponent000221() {
        this.myName = "000221";
    }
    GeneratedComponent000221.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000221',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000442 [parentName]=\"myName\"></my-comp-000442>\n      <my-comp-000443 [parentName]=\"myName\"></my-comp-000443>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000221.ctorParameters = [];
    GeneratedComponent000221.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000221;
}());
