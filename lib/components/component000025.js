import { Component, Input } from '@angular/core';
export var GeneratedComponent000025 = (function () {
    function GeneratedComponent000025() {
        this.myName = "000025";
    }
    GeneratedComponent000025.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000025',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000050 [parentName]=\"myName\"></my-comp-000050>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000025.ctorParameters = [];
    GeneratedComponent000025.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000025;
}());
