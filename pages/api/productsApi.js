import { getData } from '../../lib/queries'

export default async function handler(req, res) {
	if (req.query.key === process.env.SECRET_KEY) {
		const data = await getData()
		return res.status(200).json(data.data.allProducts)
	} else {
		const data = await getData()
		return res.status(201).json(data.data.allProducts)
	}
}