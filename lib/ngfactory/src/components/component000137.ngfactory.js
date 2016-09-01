var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000137';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/component000274';
import * as import11 from '../../../components/component000275';
import * as import12 from './component000274.ngfactory';
import * as import13 from './component000275.ngfactory';
var renderType_GeneratedComponent000137_Host = null;
var _View_GeneratedComponent000137_Host0 = (function (_super) {
    __extends(_View_GeneratedComponent000137_Host0, _super);
    function _View_GeneratedComponent000137_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent000137_Host0, renderType_GeneratedComponent000137_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent000137_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-comp-000137', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GeneratedComponent0001370(this.viewUtils, this.injector(0), this._appEl_0);
        this._GeneratedComponent000137_0_4 = new import3.GeneratedComponent000137();
        this._appEl_0.initComponent(this._GeneratedComponent000137_0_4, [], compView_0);
        compView_0.create(this._GeneratedComponent000137_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GeneratedComponent000137_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GeneratedComponent000137) && (0 === requestNodeIndex))) {
            return this._GeneratedComponent000137_0_4;
        }
        return notFoundResult;
    };
    return _View_GeneratedComponent000137_Host0;
}(import1.AppView));
function viewFactory_GeneratedComponent000137_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000137_Host === null)) {
        (renderType_GeneratedComponent000137_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GeneratedComponent000137_Host0(viewUtils, parentInjector, declarationEl);
}
export var GeneratedComponent000137NgFactory = new import9.ComponentFactory('my-comp-000137', viewFactory_GeneratedComponent000137_Host0, import3.GeneratedComponent000137);
var styles_GeneratedComponent000137 = [];
var renderType_GeneratedComponent000137 = null;
var _View_GeneratedComponent0001370 = (function (_super) {
    __extends(_View_GeneratedComponent0001370, _super);
    function _View_GeneratedComponent0001370(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent0001370, renderType_GeneratedComponent000137, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent0001370.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'style', 'padding-left: 5px');
        this._text_6 = this.renderer.createText(this._el_5, '\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'my-comp-000274', null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._el_7);
        var compView_7 = import12.viewFactory_GeneratedComponent0002740(this.viewUtils, this.injector(7), this._appEl_7);
        this._GeneratedComponent000274_7_4 = new import10.GeneratedComponent000274();
        this._appEl_7.initComponent(this._GeneratedComponent000274_7_4, [], compView_7);
        compView_7.create(this._GeneratedComponent000274_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_5, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_5, 'my-comp-000275', null);
        this._appEl_9 = new import2.AppElement(9, 5, this, this._el_9);
        var compView_9 = import13.viewFactory_GeneratedComponent0002750(this.viewUtils, this.injector(9), this._appEl_9);
        this._GeneratedComponent000275_9_4 = new import11.GeneratedComponent000275();
        this._appEl_9.initComponent(this._GeneratedComponent000275_9_4, [], compView_9);
        compView_9.create(this._GeneratedComponent000275_9_4, [], null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ], [], []);
        return null;
    };
    _View_GeneratedComponent0001370.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.GeneratedComponent000274) && (7 === requestNodeIndex))) {
            return this._GeneratedComponent000274_7_4;
        }
        if (((token === import11.GeneratedComponent000275) && (9 === requestNodeIndex))) {
            return this._GeneratedComponent000275_9_4;
        }
        return notFoundResult;
    };
    _View_GeneratedComponent0001370.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.myName;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._GeneratedComponent000274_7_4.parentName = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.myName;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._GeneratedComponent000275_9_4.parentName = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(2, 'component ', this.context.myName, ', parent is ', this.context.parentName, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GeneratedComponent0001370;
}(import1.AppView));
export function viewFactory_GeneratedComponent0001370(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000137 === null)) {
        (renderType_GeneratedComponent000137 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000137.ts class GeneratedComponent000137 - inline template', 0, import8.ViewEncapsulation.None, styles_GeneratedComponent000137, {}));
    }
    return new _View_GeneratedComponent0001370(viewUtils, parentInjector, declarationEl);
}
