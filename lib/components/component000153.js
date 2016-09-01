import { Component, Input } from '@angular/core';
export var GeneratedComponent000153 = (function () {
    function GeneratedComponent000153() {
        this.myName = "000153";
    }
    GeneratedComponent000153.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000153',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000306 [parentName]=\"myName\"></my-comp-000306>\n      <my-comp-000307 [parentName]=\"myName\"></my-comp-000307>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000153.ctorParameters = [];
    GeneratedComponent000153.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000153;
}());
