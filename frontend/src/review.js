class Review {
    constructor(comment, rating){
        this.comment = comment
        this.rating = rating
    }
    renderIndexHTML() {
        return `<li>${this.comment} - ${this.rating}</li>`;
    }

    renderShowHTML() {
        return `<div>
            <h1>${Movie.title}</h1>
            ${this.reviews.map((review) => `<p>${review.comment} - ${review.rating}</p>`).join("")}
            </div>`;
    }
}