import { Component, Input } from '@angular/core';
export var GeneratedComponent000155 = (function () {
    function GeneratedComponent000155() {
        this.myName = "000155";
    }
    GeneratedComponent000155.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000155',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000310 [parentName]=\"myName\"></my-comp-000310>\n      <my-comp-000311 [parentName]=\"myName\"></my-comp-000311>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000155.ctorParameters = [];
    GeneratedComponent000155.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000155;
}());
