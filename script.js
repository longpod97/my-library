const addBttn = document.getElementById("new-book")
const newBook = document.getElementById("new-book-form")
const cancelForm = document.getElementById("close-form")
const wrapper = document.querySelector(".wrapper")
const submitNewBook = document.getElementById("submit")
const contentArea = document.getElementById("content")

const newTitle = document.getElementById("new-title");
const newAuthor = document.getElementById("new-author");
const newPages = document.getElementById("new-pages")

const library = [];


// Dialog form actions
addBttn.addEventListener("click", () => {
    newBook.showModal();
})

cancelForm.addEventListener("click", (e) => {
        e.preventDefault();
        newBook.close();
        resetForm();

})

newBook.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        e.preventDefault();
        newBook.close();
        resetForm();
    }
})

submitNewBook.addEventListener("click", (e) => {
    e.preventDefault();
    const selection = document.querySelector('input[type=radio]:checked');
    const submitBook = new Book(newTitle.value, newAuthor.value, newPages.value, selection.value);
    library.unshift(submitBook);
    console.log(library);
    addCard();
    newBook.close();
    resetForm();
   
})

function resetForm() {
    newTitle.value = ""
    newAuthor.value = ""
    newPages.value = ""
}


// data constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
       return console.log(`${title}, by ${author}, ${pages} pages, ${read}`)
    }
}


function addCard() {
    const newCard = document.createElement("div");
        newCard.classList.add("book-card");
    const thisTitle = document.createElement("p");
    const thisAuthor = document.createElement("p");
    const thisPages = document.createElement("p");
    const thisRead = document.createElement("button");
        thisRead.classList.add("read-button")
 

    const trash = document.createElement("button");
    
    trash.classList.add("trash")
    trash.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
</svg>`

    newCard.appendChild(thisTitle);
    newCard.appendChild(thisAuthor);
    newCard.appendChild(thisPages);
    newCard.appendChild(thisRead);
    newCard.appendChild(trash);

    thisTitle.textContent = `Title: ${library[0].title}`
    thisAuthor.textContent = `Author: ${library[0].author}`
    thisPages.textContent = `Pages: ${library[0].pages}`
    thisRead.textContent = `${library[0].read}`


    contentArea.appendChild(newCard);

    trash.addEventListener("click", () => {contentArea.removeChild(newCard)})

    thisRead.addEventListener("click", () => {
        if (thisRead.textContent == "Read") {
            thisRead.textContent = "Not Read"
        } else if (thisRead.textContent == "Not Read") {
            thisRead.textContent = "Read"
        }
    })


}


