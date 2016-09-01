import 'reflect-metadata'

import * as ts from 'typescript';
import * as tsc from '@angular/tsc-wrapped';

import {CodeGenerator} from '@angular/compiler-cli/src/codegen';

function codegen(
    ngOptions: tsc.AngularCompilerOptions, program: ts.Program, host: ts.CompilerHost) {
  return CodeGenerator.create(ngOptions, program, host)
}


export class WebpackCompilerHost implements ts.CompilerHost {

  constructor(){

  }

}


export default class NgCompilerPlugin {
  constructor(options?){
    console.log('init')
  }
  apply(compiler){
    compiler.plugin('make', function(compilation){
      console.log(compilation)
    })
  }
}
