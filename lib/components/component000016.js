import { Component, Input } from '@angular/core';
export var GeneratedComponent000016 = (function () {
    function GeneratedComponent000016() {
        this.myName = "000016";
    }
    GeneratedComponent000016.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000016',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000032 [parentName]=\"myName\"></my-comp-000032>\n      <my-comp-000033 [parentName]=\"myName\"></my-comp-000033>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000016.ctorParameters = [];
    GeneratedComponent000016.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000016;
}());
