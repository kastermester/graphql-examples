const fs = require('fs');
const path = require('path');
const { printSchema, getIntrospectionQuery, buildClientSchema } = require('graphql');
const https = require('https');

const schemaPath = path.resolve(__dirname, '../cache/schema.graphql');


const hostname = 'graphql-pokemon.now.sh';
const urlPath = '/';

const request = https.request({
	method: 'post',
	path: urlPath,
	protocol: 'https:',
	host: hostname,

}, (res) => {
	const buffers = [];
	res.on('data', (buf) => buffers.push(Buffer.isBuffer(buf) ? buf : Buffer.from(buf)));
	res.on('end', () => {
		const responseText = Buffer.concat(buffers).toString();
		const schema = buildClientSchema(JSON.parse(responseText).data);
		fs.writeFileSync(schemaPath, printSchema(schema));
		console.log('Wrote ' + schemaPath);
	});
});

request.setHeader('Content-Type', 'application/graphql');
request.write(getIntrospectionQuery({ descriptions: true }));
request.end();
