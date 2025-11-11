// import Mustache from './../../../mustache';


class Book {

    #isbn;
    constructor(read, tittle, author, language, description, published){
        this.#isbn = crypto.randomUUID();
        this.read = read;
        this.tittle = tittle;
        this.author = author;
        this.language = language;
        this.description = description;
        this.published = published;
    }

    get getISBN(){
        return this.#isbn;
    }

    get getBookDetails(){
        return `${this.tittle} by ${this.author} published in ${this.published}`;
    }


}

class MyLibrary{
    
    #library = []

    constructor(){}

    get getLibrary() {
        return this.#library;
    }

    addBook(book){
        this.#library.push(book);
    }

    removeBook(index){
        this.#library.splice(index,1);
    }
}

class viewerBook{

    lib;
    #$m;
    #favDialog;
    
    #showButton
    #confirmBtn
    #deleteButton
    #alterButton

    #bookTemplate
    #tittle
    #author
    #language
    #description
    #read

    constructor(){
        this.#cacheDom();
        this.lib = new MyLibrary();
        this.renderHtml();
    }

    #cacheDom(){
        this.#$m = $("main");
        this.#favDialog = this.#$m.find("#favDialog");
        
        this.#showButton = this.#$m.find("#showDialog");
        this.#confirmBtn = this.#$m.find("#confirmBtn");
        this.#deleteButton = this.#$m.find("#delete");
        this.#alterButton = this.#$m.find("#alter");
        
        this.#bookTemplate = this.#$m.find("#bookTemplate");
        this.#tittle = this.#$m.find("#tittle");
        this.#author = this.#$m.find("#author");
        this.#language = this.#$m.find("#language");
        this.#description = this.#$m.find("#description");
        this.#read = this.#$m.find("#read");
    }

    renderHtml(){
        // output = Mustache.render()
        // const bData = new Book(true, "The great wall","Smith", "Eng", "Excellent book.", 2013);
        //this.lib.addBook(bData);
        // this.#bookTemplate.html(Mustache.render(this.#bookTemplate, bData));

    }

    get details(){
        return this.#deleteButton;
    }
}

const vwBook = new viewerBook();
// vwBook.details.text("aaaaaaaaaaaa")


// const book = new Book(true, "Tittle 1", "kecio", "english", "good one", 2013);
// console.log(book.getBookDetails());
// console.log(book.getISBN());


// const book2 = new Book(true, "Tittle 2", "kecio", "english", "good two", 2005);
// const book3 = new Book(false, "Tittle 3", "kecio", "english", "good three", 2012);
// const book4 = new Book(true, "Tittle 4", "kecio", "english", "good four", 1989);

// const myLib = new MyLibrary();
// console.log(myLib.getLibrary());
// myLib.addBook(book);
// myLib.addBook(book2);
// myLib.addBook(book3);
// myLib.addBook(book4);

// console.log(myLib.getLibrary());

// myLib.removeBook(0);
// console.log(myLib.getLibrary());
