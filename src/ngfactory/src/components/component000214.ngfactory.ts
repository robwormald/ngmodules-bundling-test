/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000214';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/component000428';
import * as import11 from '../../../components/component000429';
import * as import12 from './component000428.ngfactory';
import * as import13 from './component000429.ngfactory';
var renderType_GeneratedComponent000214_Host:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent000214_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _GeneratedComponent000214_0_4:import3.GeneratedComponent000214;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent000214_Host0,renderType_GeneratedComponent000214_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-comp-000214',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GeneratedComponent0002140(this.viewUtils,this.injector(0),this._appEl_0);
    this._GeneratedComponent000214_0_4 = new import3.GeneratedComponent000214();
    this._appEl_0.initComponent(this._GeneratedComponent000214_0_4,[],compView_0);
    compView_0.create(this._GeneratedComponent000214_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.GeneratedComponent000214) && (0 === requestNodeIndex))) { return this._GeneratedComponent000214_0_4; }
    return notFoundResult;
  }
}
function viewFactory_GeneratedComponent000214_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_GeneratedComponent000214_Host === (null as any))) { (renderType_GeneratedComponent000214_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_GeneratedComponent000214_Host0(viewUtils,parentInjector,declarationEl);
}
export const GeneratedComponent000214NgFactory:import9.ComponentFactory<import3.GeneratedComponent000214> = new import9.ComponentFactory<import3.GeneratedComponent000214>('my-comp-000214',viewFactory_GeneratedComponent000214_Host0,import3.GeneratedComponent000214);
const styles_GeneratedComponent000214:any[] = [];
var renderType_GeneratedComponent000214:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent0002140 extends import1.AppView<import3.GeneratedComponent000214> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _GeneratedComponent000428_7_4:import10.GeneratedComponent000428;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _GeneratedComponent000429_9_4:import11.GeneratedComponent000429;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent0002140,renderType_GeneratedComponent000214,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'style','padding-left: 5px');
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'my-comp-000428',(null as any));
    this._appEl_7 = new import2.AppElement(7,5,this,this._el_7);
    var compView_7:any = import12.viewFactory_GeneratedComponent0004280(this.viewUtils,this.injector(7),this._appEl_7);
    this._GeneratedComponent000428_7_4 = new import10.GeneratedComponent000428();
    this._appEl_7.initComponent(this._GeneratedComponent000428_7_4,[],compView_7);
    compView_7.create(this._GeneratedComponent000428_7_4,[],(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_5,'my-comp-000429',(null as any));
    this._appEl_9 = new import2.AppElement(9,5,this,this._el_9);
    var compView_9:any = import13.viewFactory_GeneratedComponent0004290(this.viewUtils,this.injector(9),this._appEl_9);
    this._GeneratedComponent000429_9_4 = new import11.GeneratedComponent000429();
    this._appEl_9.initComponent(this._GeneratedComponent000429_9_4,[],compView_9);
    compView_9.create(this._GeneratedComponent000429_9_4,[],(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
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
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.GeneratedComponent000428) && (7 === requestNodeIndex))) { return this._GeneratedComponent000428_7_4; }
    if (((token === import11.GeneratedComponent000429) && (9 === requestNodeIndex))) { return this._GeneratedComponent000429_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.myName;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._GeneratedComponent000428_7_4.parentName = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.myName;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._GeneratedComponent000429_9_4.parentName = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(2,'component ',this.context.myName,', parent is ',this.context.parentName,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_GeneratedComponent0002140(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.GeneratedComponent000214> {
  if ((renderType_GeneratedComponent000214 === (null as any))) { (renderType_GeneratedComponent000214 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000214.ts class GeneratedComponent000214 - inline template',0,import8.ViewEncapsulation.None,styles_GeneratedComponent000214,{})); }
  return new _View_GeneratedComponent0002140(viewUtils,parentInjector,declarationEl);
}