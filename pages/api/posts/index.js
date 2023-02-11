import { getAllPublished } from '../../../lib/notion';

export default async function handler(req, res) {
  const posts = await getAllPublished();
  res.status(200).json(posts);
}
