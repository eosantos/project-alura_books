const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
  const elementBtn = document.getElementById(this.id)
  const categoria = elementBtn.value
  let booksFilter = categoria == 'available' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == categoria)
    displayBooks(booksFilter) 
}