import { Component, Input } from '@angular/core';
export var GeneratedComponent000069 = (function () {
    function GeneratedComponent000069() {
        this.myName = "000069";
    }
    GeneratedComponent000069.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000069',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000138 [parentName]=\"myName\"></my-comp-000138>\n      <my-comp-000139 [parentName]=\"myName\"></my-comp-000139>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000069.ctorParameters = [];
    GeneratedComponent000069.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000069;
}());
