function applyDiscount(books) {
  const discount = 0.3
  discountedBooks = books.map(book => {
    return {...book, price: book.price - (book.price * discount)}
  })
  return discountedBooks
}