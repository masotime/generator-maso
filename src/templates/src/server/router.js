// routes exist in a separate file to make hot-reloading of express routes possible
import { Router } from 'express';

// React stuff
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'components';

const router = Router();

router.get('/', (req, res) => {
	const model = {
		title: '<%= appname %>',
		message: 'Hello <%= author %>!'
	};

	res.status(200).end(`<!DOCTYPE HTML>${renderToString(<App model={model} />)}`);
});

export default router;