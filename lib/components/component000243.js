import { Component, Input } from '@angular/core';
export var GeneratedComponent000243 = (function () {
    function GeneratedComponent000243() {
        this.myName = "000243";
    }
    GeneratedComponent000243.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000243',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000486 [parentName]=\"myName\"></my-comp-000486>\n      <my-comp-000487 [parentName]=\"myName\"></my-comp-000487>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000243.ctorParameters = [];
    GeneratedComponent000243.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000243;
}());
