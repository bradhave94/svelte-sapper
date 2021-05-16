import sirv from 'sirv';
var express = require('express');
var app = express();
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()).listen(
	PORT,
	(err) => {
		if (err) console.log('error', err);
	}
);
