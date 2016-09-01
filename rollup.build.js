var rollup = require( 'rollup' );
var nodeResolve = require('rollup-plugin-node-resolve');
var includePaths = require('rollup-plugin-includepaths');
var inject = require('rollup-plugin-inject')
var closure = require('google-closure-compiler-js')

function closureCompilerPlugin(){
  return {
    transformBundle(bundle){
      var transformed = closure.compile({jsCode: [{src: bundle}]});

      return transformed.compiledCode;
    }
  }
}

console.log(closure)

var aot = rollup.rollup({

	entry: './lib/main-static.js',
	plugins: [
    nodeResolve({
      module: true
    }),
		includePaths({
			paths: ["vendor/rxjs"]
		}),
    closureCompilerPlugin()
	],
})
.then(bundle => {
	return bundle.write({
		format: 'iife',
		dest: 'build/bundle.aot.js'
	})
}).catch(err => console.log(err))

var jit = rollup.rollup({

	entry: './lib/main.js',
	plugins: [
    nodeResolve({
      module: true
    }),
		includePaths({
			paths: ["vendor/rxjs"]
		}),
    closureCompilerPlugin()
	],
})
.then(bundle => {
	return bundle.write({
		format: 'iife',
		dest: 'build/bundle.jit.js'
	})
})
.catch(err => console.error(err))

Promise.all([jit, aot]).then(() => console.log('done'))
