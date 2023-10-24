let btnOrderPrice = document.getElementById('btnOrderPrice')
btnOrderPrice.addEventListener('click', orderBooksByPrice)

function orderBooksByPrice() {
  let booksOrder = books.sort((a, b) => a.preco - b.preco)
  displayBooks(booksOrder)
}