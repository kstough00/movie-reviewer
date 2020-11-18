class Movie {

    static all = []

    constructor(title, releaseYear, producer, reviews){
        this.title = title
        this.releaseYear = releaseYear
        this.producer = producer
        this.reviews = reviews
        Movie.all.push
    }
    renderIndexHTML() {
        return `<li>${this.title} - ${this.releaseYear} - ${this.producer} - ${this.reviews.length}<a href="http://localhost:3000/movies"> Reviews</a></li>`;
    }

    renderShowHTML() {
        return `<div>
            <h1>${this.title}</h1>
            ${this.reviews.map((review) => `<p>${review.comment} - ${review.rating}</p>`).join("")}
            </div>`;
    }
}