const URL = 'http://localhost:3000/users/4'
const bookURL ='http://localhost:3000/books'

document.addEventListener('DOMContentLoaded', () => {
  getBooks()
	createButtons()
	createBook()
})

 function getBooks(){
	fetch(URL)
		.then(res => res.json())
		.then(userdata => renderUser(userdata))
		
}

const renderUser = (user) => {

		// let bookSpan=document.createElement('span')


		let headerUserName=document.getElementById('user-name')
				headerUserName.innerText= "Hi!  " + user.name

		let bookContainer= document.querySelector('#list')

				user.books.forEach( book => {
		let bookLi=document.createElement('li')
		bookLi.innerText= book.title

		bookLi.addEventListener('click', () => {
			displayInfo(book)

		})

		
		bookContainer.appendChild(bookLi)
	})

			

}
	
function displayInfo(book) {

	const infoContainer= document.getElementById("info-container") 

	let bookTitle= document.getElementById('book-title')
			bookTitle.innerText = book.title 

	let bookImage=document.getElementById('image')
			bookImage.src= book.image

	let bookAuthor=document.getElementById('book-author')
			bookAuthor.innerText= `Written By: ${book.author}`

	let bookPages=document.getElementById('book-pages')
			bookPages.innerText= "Page count: " + book.pages

	let bookSummary=document.getElementById('book-summary')
			bookSummary.textContent = book.summary
	

}

function createButtons(){
const deleteBook=document.getElementById('delete-book')
			let deleteBtn= document.createElement('button')
			deleteBtn.textContent="Delete"

		let editBtn= document.createElement('button')
				editBtn.textContent= "Edit Book"

			deleteBook.append(deleteBtn, editBtn)
}

function createBook() {

let bookForm = document.getElementById('book-form')
	bookForm.addEventListener('submit', (event) => {
		event.preventDefault()
		console.log(event, "Clicked")

		let bookData = {
	 
			title: event.target.title.value,
			author: event.target.author.value,
			pages: event.target.pages.value,
			summary: event.target.summary.value,
			image: event.target.image.value
			
		}
		
		let reqPack = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(bookData)
		}

			console.log(bookData)
		fetch(URL, reqPack)
		.then(response => response.json())
		.then(newBook => displayInfo(newBook))
	})


}