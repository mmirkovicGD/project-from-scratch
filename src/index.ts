class Book {
  constructor(
    public title: string,
    public publisher: string,
    public author: string
  ) {
    this.title = title;
    this.publisher = publisher;
    this.author = author;
  }
}

const x = new Book("Test", "Test", "Test");
console.log(x);
