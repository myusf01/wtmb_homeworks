shelf = class {
    constructor(){
        this.books = []
    }

    add_book(book){
        this.books.push(book)
    }

    shelfInfo(){
        this.books.forEach(printBook)
    }

    removeBook(bookName){
        
        // bookIndex indexi atadığımız yeni var
        // this.books.findIndex() => shelf sınıfında bulunan books listesinden index bulma fonksiyonu
        //              1               2                       2
        // findIndex((book) => book.name.toLowerCase() == bookName.toLowerCase())
        //
        // 1: findIndex içinde oluşturduğumuz yeni bir variable, listenin içindeki her bir öğreyi içinde barındıracak değişken.
        // 2: listenin içindeki nesnelerin name: propertisini alacak ve lower case yapacak arkadaş.
        // 3: removeBook fonksiyonumuzun kitap ismine dair parametresi

        let bookIndex = this.books.findIndex((book) => book.name.toLowerCase() == bookName.toLowerCase())

        this.books.splice(bookIndex, 1)
        console.log(this.books)
    }


}

printBook = book => console.log(book.name)



book = class {
    constructor(name, writer, page, category){

        this.name = name
        this.writer = writer
        this.page = page
        this.category = category

    }
}


whole_bookshelf = new shelf()
first_shelf = new shelf()
sec_shelf = new shelf()

clean_code = new book("Clean Code", "Robert C. Martin", 300, "Computer Science")
alamut = new book("Alamut","Vladimir Bartol", 400, "Novel")
sn_garip = new book("Sünnet Neden Garip","Nurettin Yıldız", 148,"Islamic")
haclı = new book("Müslümanların Gözüyle Haçlı Seferleri", "Paul M. Cobb", 450, "History")
rahmet = new book("Rahmet Yağmurları","el-Cevziyye",350,"Islamic")

first_shelf.add_book(rahmet)
first_shelf.add_book(haclı)

sec_shelf.add_book(clean_code)
sec_shelf.add_book(alamut)

whole_bookshelf.add_book(sec_shelf)
whole_bookshelf.add_book(first_shelf)


first_shelf.removeBook(rahmet.name)
first_shelf.shelfInfo()