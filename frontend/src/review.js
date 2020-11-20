class Review {
    
    constructor(Obj){
        this.comment = Obj.comment
        this.rating = Obj.rating
    }
    HTMLifyReview() {
        return `<li>${this.comment} - ${this.rating}</li>`;
    }

    DisplayReviews() {
        return `<div>
            <h1>${Movie.title}</h1>
            ${this.reviews.map((review) => `<p>${review.comment} - ${review.rating}</p>`).join("")}
            </div>`;
    }
}