import { NextApiRequest, NextApiResponse } from 'next';
import runMiddleware from '../../../lib/runMiddleware';
import cors from '../../../middleware/cors';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await runMiddleware(req, res, cors);

	switch (req.method) {
		case 'GET':
			//...
			break;
		case 'POST':
			if (!req.body) {
				res.statusCode = 404;
				res.end('Error');
				return;
			}
			//...
			break;
		default:
			res.status(405).end(); //Method Not Allowed
			break;
	}
};

export default handler;
