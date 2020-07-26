let myLibrary = [];
const container = document.querySelector("#container");
const openFormButton = document.querySelector("#open_form_btn");
const addBookForm = document.querySelector("#fade");



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

function addBookToLibrary() {

}

function render() {
    for (let i = 0 ; i < myLibrary.length ; i++) {
        let div = document.createElement("div");
        div.classList.add("book_card");
        div.setAttribute("value",i);

        div.textContent = myLibrary[i].name;

        container.appendChild(div);
    }
}

let harry_potter = new Book("Harry Potter");
myLibrary.push(harry_potter);

let lotr = new Book("Lord of the rings");
myLibrary.push(lotr);

let fermat = new Book("Fermat's last theorem");
myLibrary.push(fermat);
render();