"use strict";
var WebpackReflectorHost = (function () {
    function WebpackReflectorHost() {
    }
    return WebpackReflectorHost;
}());
exports.WebpackReflectorHost = WebpackReflectorHost;
var NgCompilerPlugin = (function () {
    function NgCompilerPlugin(options) {
        console.log('init');
    }
    NgCompilerPlugin.prototype.apply = function (compiler) {
        compiler.plugin('make', function (compilation) {
            console.log(compilation);
        });
    };
    return NgCompilerPlugin;
}());
exports.__esModule = true;
exports["default"] = NgCompilerPlugin;
