let books = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksAPI()

async function getSearchBooksAPI() {
  const res = await fetch(endpointAPI)
  books = await res.json()
  let discountedBooks = applyDiscount(books)
  displayBooks(discountedBooks)
}
