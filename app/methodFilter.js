const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
  const elementBtn = document.getElementById(this.id)
  const categoria = elementBtn.value
  let booksFilter = categoria == 'available' ? filterAvailable() : FilterCategory(categoria)
  displayBooks(booksFilter) 
  if (categoria == 'available') {
    const valueTotal = calcTotalBooksAvailable(booksFilter)
    displayTotalValueOfAvailableBooks(valueTotal)
  }
}

function FilterCategory(categoria) {
  return books.filter(book => book.categoria == categoria)
}

function filterAvailable() {
  return books.filter(book => book.quantidade > 0)
}

function displayTotalValueOfAvailableBooks(valueTotal) {
  elementWithTotalValueOfAvailableBooks.innerHTML = `
    <div class="books__available">
      <p>Todos os books disponíveis por R$ <span id="valor">${valueTotal}</span></p>
    </div>
  `
}