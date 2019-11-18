const ts = require('typescript');
const path = require('path');
const fs = require('fs');
const { transformer } = require('typescript-transform-relay');

function transformWithOptions(options, fileName) {
	return (text, providedFileName) =>
		ts.transpileModule(text, {
			compilerOptions: {
				target: ts.ScriptTarget.ES2017,
				jsx: ts.JsxEmit.Preserve,
				sourceMap: false,
			},
			fileName: fileName,
			transformers: {
				before: [transformer(options)],
			},
		}).outputText;
}

console.log(transformWithOptions({
	schema: path.join(__dirname, 'cache', 'schema.graphql'),
	compat: false,
	substituteVariables: true,
	artifactDirectory: '../cache/queries',
	isDevVariable: '__IS_DEV__',
	isDevelopment: false,
}, 'src/App.tsx')(fs.readFileSync('src/App.tsx', 'utf-8'), 'src/App.tsx'));
