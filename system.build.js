var SystemBuilder = require('systemjs-builder');

var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
  .then(() => Promise.all([
    builder.buildStatic('lib/main-static.js','build/app-aot.js', {minify: true, mangle: true, rollup: true}),
    builder.buildStatic('lib/main.js','build/app-jit.js', {minify: true, mangle: true, rollup: true})
  ]));





// builder.loadConfig('./system.config.js')
//   .then(() => {
// 	  return Promise.all([builder.trace('app'), builder.trace('(app/routes/lazy + app/routes/lazy.ngfactory)')])
// 	    .then(trees => {
// 			var commonTree = builder.intersectTrees(trees[0], trees[1]);
// 			return Promise.all([
// 				builder.bundle(commonTree,{ minify: true, mangle: true, rollup: true }),
// 				builder.bundle(builder.subtractTrees(trees[0], commonTree), { minify: true, mangle: true, rollup: true }),
// 				builder.bundle(builder.subtractTrees(trees[1], commonTree), { minify: true, mangle: true, rollup: true })
// 			])
// 			.then(moduleTraces => {
// 				moduleTraces.forEach(mod => console.log(Object.keys(mod)))
// 			})
// 		})

//   })
