import { Component, Input } from '@angular/core';
export var GeneratedComponent000087 = (function () {
    function GeneratedComponent000087() {
        this.myName = "000087";
    }
    GeneratedComponent000087.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000087',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000174 [parentName]=\"myName\"></my-comp-000174>\n      <my-comp-000175 [parentName]=\"myName\"></my-comp-000175>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000087.ctorParameters = [];
    GeneratedComponent000087.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000087;
}());
