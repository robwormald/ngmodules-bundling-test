import { Component, Input } from '@angular/core';
export var GeneratedComponent000093 = (function () {
    function GeneratedComponent000093() {
        this.myName = "000093";
    }
    GeneratedComponent000093.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000093',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000186 [parentName]=\"myName\"></my-comp-000186>\n      <my-comp-000187 [parentName]=\"myName\"></my-comp-000187>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000093.ctorParameters = [];
    GeneratedComponent000093.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000093;
}());
