const { transformer } = require('typescript-transform-relay');
const path = require('path');
module.exports = (arg) => {
	const transform = transformer({
		schema: path.join(__dirname, 'cache', 'schema.graphql'),
		compat: false,
		substituteVariables: true,
		artifactDirectory: path.join(__dirname, 'cache', 'queries'),
	});

	return {
		before: [transform],
	};
};
