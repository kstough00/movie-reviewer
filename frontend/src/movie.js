class Movie {
    constructor(title, releaseYear, producer, reviews){
        this.title = title
        this.releaseYear = releaseYear
        this.producer = producer
        this.reviews = reviews
    }
    renderIndexHTML() {
        return `<li>${this.title} - ${this.releaseYear} - ${this.producer}`;
    }
}