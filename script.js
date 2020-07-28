let myLibrary = [];
const container = document.querySelector("#container");
const openFormButton = document.querySelector("#open_form_btn");
const addBookForm = document.querySelector("#fade");
const submitForm = document.querySelector("#submit_form");
var bookForm = document.querySelector("#submit_form");

bookForm.addEventListener("click", () => {
    let new_book = new Book(document.querySelector("#book_title").value,
                            document.querySelector("#book_author").value,
                            document.querySelector("#book_pages").value,
                            document.querySelector("#book_read").checked);
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

function Book(name,author,pages,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !(this.read);
    render();
}

function addBookToLibrary(inputBook) {
    myLibrary.push(inputBook);
}

function render() {
    container.innerHTML = "";
    for (let i = 0 ; i < myLibrary.length ; i++) {
        // creates the remove button, adds the event listener and adds it to the div.
        let btn = document.createElement("button");
        btn.textContent = "x";
        btn.classList.add("remove_book");
        btn.addEventListener("click", () => {
            myLibrary.splice(i,1);
            render();
        });
        

        let readBtn = document.createElement("button");
        readBtn.textContent = "r";
        readBtn.classList.add("toggle_read");
        readBtn.addEventListener("click", () => {
            myLibrary[i].toggleRead();
        });
        


        //create a div in which the info will be contained
        let div = document.createElement("div");
        div.classList.add("book_card");
        let p = document.createElement("p");
        p.textContent = myLibrary[i].name;
        p.setAttribute("id","title");
        div.appendChild(readBtn);
        div.appendChild(btn);
        div.appendChild(document.createElement("br"));
        div.appendChild(p);
       

        let p1 = document.createElement("p");
        p1.textContent = myLibrary[i].author;
        p1.setAttribute("id","author");
        div.appendChild(p1);

        let p2 = document.createElement("p");
        p2.textContent = "Pages: " + myLibrary[i].pages;
        p2.setAttribute("id","pages");
        div.appendChild(p2);

        let p3 = document.createElement("p");
        p3.setAttribute("id","read");
        if (myLibrary[i].read) {
            p3.textContent = "I have read this book.";
        }
        else {
            p3.textContent = "I have not read this book.";
        }
        div.appendChild(p3);

        


        //add the div to the container
        container.appendChild(div);
    }
}

let harry_potter = new Book("Harry Potter","JK Rowling",233,true);
addBookToLibrary(harry_potter);


let lotr = new Book("Lord of the rings","Tolkien",533,false);
addBookToLibrary(lotr);

let fermat = new Book("Fermat's last theorem","Simon Singh",352,true);
addBookToLibrary(fermat);
render();