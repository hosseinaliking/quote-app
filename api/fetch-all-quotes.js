const fetchAllQuotes = async () => {
  const req = await fetch('http://localhost:3001/quotes')
  return req.json()
}

export default fetchAllQuotes