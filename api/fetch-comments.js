const fetchCommnet = async (id) => {
  const req = await fetch(`http://localhost:3001/comments?quoteId=${id}`)
  return req.json()
}

export default fetchCommnet