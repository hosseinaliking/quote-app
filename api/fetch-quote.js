const fetchQuote = async (id) => {
  const req = await fetch(`http://localhost:3001/quotes/${id}`)
  return req.json()
}

export default fetchQuote