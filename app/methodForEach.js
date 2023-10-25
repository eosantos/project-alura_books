const elementInsertBooks = document.getElementById ('books')
const elementWithTotalValueOfAvailableBooks = document.getElementById('total_value_books_avaible')

function displayBooks(listBooks) {
  elementWithTotalValueOfAvailableBooks.innerHTML = ''
  elementInsertBooks.innerHTML = ''
  listBooks.forEach(book => {
    let availability = book.quantidade > 0 ? 'books__imagens' : 'books__imagens indisponivel'
    elementInsertBooks.innerHTML += `
    <div class="book">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="book__title">
        ${book.titulo}
      </h2>
      <p class="book__description">${book.autor}</p>
      <p class="book__price" id="price">R$ ${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>        
      </div>
    </div>
    `
  })
}