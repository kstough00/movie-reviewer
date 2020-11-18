class Movie {
    constructor(title, releaseYear, producer, reviews){
        this.title = title
        this.releaseYear = releaseYear
        this.producer = producer
        this.reviews = reviews
    }
    renderIndexHTML() {
        return `<li>${this.title} - ${this.releaseYear} - ${this.producer} - ${this.reviews.length} reviews</li>`;
    }

    renderShowHTML() {
        return `<div>
            <h1>${this.title}</h1>
            ${this.reviews.map((review) => `<p>${review.comment} - ${review.rating}</p>`).join("")}
            </div>`;
    }
}