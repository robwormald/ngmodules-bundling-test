import { Component, Input } from '@angular/core';
export var GeneratedComponent000172 = (function () {
    function GeneratedComponent000172() {
        this.myName = "000172";
    }
    GeneratedComponent000172.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000172',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000344 [parentName]=\"myName\"></my-comp-000344>\n      <my-comp-000345 [parentName]=\"myName\"></my-comp-000345>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000172.ctorParameters = [];
    GeneratedComponent000172.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000172;
}());
