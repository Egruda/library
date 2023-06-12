

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
    
    report() {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

let theHobbit = new Book('The Hobbit', 'Hobbits', '273', 'Read');
let harryPotter = new Book ('Harry Potter', 'JK Rowling', '100', 'Not read');

let myLibrary = [theHobbit, harryPotter];



function addBookToLibrary() {
    let newBook = new Book('title', 'author', 'pages', 'read');
    myLibrary.push(newBook);
}

function display() {
    const card = [];
    const removeButton = [];
    const readButton = [];
    const para = [];
    const divButtonsCard =[];
    let content = document.querySelector('.content');


    for(let i = 0, j = myLibrary.length; i < j; i++) {
        card[i] = document.createElement('div');
        card[i].classList.add('card');
        card[i].setAttribute('data-book', i);
        
        
        para[i] = [];
        para[i][0] = document.createElement('p');
        para[i][0].classList.add('bookDetails');
        para[i][0].textContent = myLibrary[i].title;
        card[i].appendChild(para[i][0]);
        
        para[i][1] = document.createElement('p');
        para[i][1].classList.add('bookDetails');
        para[i][1].textContent = myLibrary[i].author;
        card[i].appendChild(para[i][1]);
        
        para[i][2] = document.createElement('p');
        para[i][2].classList.add('bookDetails');
        para[i][2].textContent = myLibrary[i].pages + ' Pages';
        card[i].appendChild(para[i][2]);
        
        para[i][3] = document.createElement('p');
        para[i][3].classList.add('bookDetails');
        para[i][3].setAttribute('data-book', i);
        para[i][3].textContent = myLibrary[i].read;
        card[i].appendChild(para[i][3]);

        divButtonsCard[i] = document.createElement('div');
        divButtonsCard[i].classList.add('buttonCard')
        
        removeButton[i] = document.createElement('button');
        removeButton[i].setAttribute('type', 'button');
        removeButton[i].textContent = 'Remove';
        removeButton[i].classList.add('removeButton');
        removeButton[i].setAttribute('data-index', i);
        divButtonsCard[i].appendChild(removeButton[i]);

        readButton[i] = document.createElement('button');
        readButton[i].setAttribute('type', 'button');
        readButton[i].setAttribute('data-index', i);
        readButton[i].textContent = 'Read';
        readButton[i].classList.add('readButton');
        divButtonsCard[i].appendChild(readButton[i]);

        card[i].appendChild(divButtonsCard[i]);


        content.appendChild(card[i]);

    }
}

display();

const buttonForm = document.querySelector('.button-form');
buttonForm.addEventListener('click', displayForm);

function displayForm() {
    buttonForm.removeEventListener('click', displayForm);

    console.log('a');
    form = document.createElement('form')
    form.classList.add('form');

    labelTitle = document.createElement('label');
    labelTitle.textContent = "Title: ";
    labelTitle.setAttribute("for", "title");
    labelTitle.classList.add('form-label');
    form.appendChild(labelTitle);
    inputTitle = document.createElement('input');
    inputTitle.setAttribute("id", "title");
    inputTitle.classList.add('form-input');
    inputTitle.setAttribute("name", "title");
    form.appendChild(inputTitle);

    labelAuthor = document.createElement('label');
    labelAuthor.textContent = "Author: ";
    labelAuthor.setAttribute("for", "author");
    labelAuthor.classList.add('form-label');
    form.appendChild(labelAuthor);
    inputAuthor = document.createElement('input');
    inputAuthor.setAttribute("id", "author");
    inputAuthor.classList.add('form-input');
    inputAuthor.setAttribute('name', 'author');
    form.appendChild(inputAuthor);

    labelPages = document.createElement('label');
    labelPages.textContent = "Pages: ";
    labelPages.setAttribute("for", "pages");
    labelPages.classList.add('form-label');
    form.appendChild(labelPages);
    inputPages = document.createElement('input');
    inputPages.setAttribute("id", "pages");
    inputPages.classList.add('form-input');
    inputPages.setAttribute('name', 'pages');
    form.appendChild(inputPages);

    
    divRead = document.createElement('div');
    divRead.classList.add('Read');
    labelRead = document.createElement('label');
    labelRead.textContent = "Read: ";
    labelRead.setAttribute("for", "read");
    labelRead.classList.add('form-label');
    divRead.appendChild(labelRead);
    inputRead = document.createElement('input');
    inputRead.setAttribute("id", "read");
    inputRead.setAttribute("type", "checkbox");
    inputRead.classList.add('form-checkbox');
    inputRead.setAttribute('name', 'read');
    divRead.appendChild(inputRead);
    form.appendChild(divRead);

    divButton = document.createElement('div');
    divButton.classList.add('divButton')

    
    submitButton = document.createElement('button');
    submitButton.textContent = "Add book!";
    submitButton.classList.add('submit');
    divButton.appendChild(submitButton);
    submitButton.addEventListener('click', function(event){
        event.preventDefault()
    });

    cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel');
    divButton.appendChild(cancelButton);
    cancelButton.addEventListener('click', function(event){
        event.preventDefault()
    });

    form.appendChild(divButton);

    document.body.appendChild(form);

}

removeButton = document.querySelectorAll('.removeButton');
removeButton.forEach((item) => {
    item.addEventListener('click', removeBook)
});

function removeBook(e) {
    index = parseInt(e.target.dataset.index);
    delete myLibrary[index];
    
    
    let bookToDelete = document.querySelector(`div[data-book='${index}']`)
    bookToDelete.remove();
}
    

readButton = document.querySelectorAll('.readButton');
readButton.forEach((item) => {
    item.addEventListener('click', readToggle)
});

function readToggle(e) {
    index = parseInt(e.target.dataset.index);
    
    let bookReadUpdate = document.querySelector(`p[data-book='${index}']`);

    if(myLibrary[index].read == 'Read') {
        myLibrary[index].read = 'Not read';
        bookReadUpdate.textContent = 'Not read';
    }
    else if(myLibrary[index].read === 'Not read') {
        myLibrary[index].read = 'Read'
        bookReadUpdate.textContent = 'Read';
    }    
}
