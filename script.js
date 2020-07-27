let myLibrary = [];
const container = document.querySelector("#container");
const openFormButton = document.querySelector("#open_form_btn");
const addBookForm = document.querySelector("#fade");
const submitForm = document.querySelector("#submit_form");
var bookForm = document.querySelector("#submit_form");

bookForm.addEventListener("click", () => {
    let new_book = new Book(document.querySelector("#book_title").value);
    addBookToLibrary(new_book);
    toggleDisplay(addBookForm);
    render();
});

openFormButton.addEventListener("click", () => {
    toggleDisplay(addBookForm);
});

function toggleDisplay(element) {
    if (element.style.display == "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
    
}

function Book(name) {
    this.name = name;
}

function addBookToLibrary(inputBook) {
    myLibrary.push(inputBook);
}

function render() {
    container.innerHTML = "";
    for (let i = 0 ; i < myLibrary.length ; i++) {
        let div = document.createElement("div");
        div.classList.add("book_card");
        div.setAttribute("value",i);

        div.textContent = myLibrary[i].name;
        container.appendChild(div);
    }
}

let harry_potter = new Book("Harry Potter");
addBookToLibrary(harry_potter);

let lotr = new Book("Lord of the rings");
addBookToLibrary(lotr);

let fermat = new Book("Fermat's last theorem");
addBookToLibrary(fermat);
render();