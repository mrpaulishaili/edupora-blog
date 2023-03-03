import { getAll } from '../../../lib/library';

export default async function handler(req, res) {
  const posts = await getAll();
  res.status(200).json(posts);
}
