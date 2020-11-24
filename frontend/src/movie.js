class Movie {

    static all = []

    constructor(obj){
        this.id = obj.id
        this.title = obj.title
        this.release_year = obj.release_year
        this.producer = obj.producer
        this.reviews = obj.reviews
        Movie.all.push(this)
    }

    renderIndexHTML() {
        return (`
        <br>
        <li><strong>${this.title}-</strong>
         ${this.release_year}-
         ${this.producer}
         <li>Reviews ${this.reviews.length}: </li>
            <div class= "reviews-show">
                <ul>
                    ${this.reviews.map(review=> `<li> ${review.comment}: Rating:${review.rating}</li>`).join("")}
                </ul>
            </div>
                <div class="btn-group">
                    <h1><button type="button" id="movie-${this.id}" class="btn btn-sm btn-outline-secondary review-btn"> Add Review</button></h1>
                </div>
            <div class="hidden">
                <form class="review-form" id="${this.id}">
                    <label>Comment:</label>
                    <input type="text" id="comment"/><br>
                    <label>Rating:</label>
                    <input type="number" id="rating"/><br>
                    <input type="submit" />
                </form>
                <br>
            </div>
            <br>
        </div>
         `)
    }

    static renderHTMLAll(){
        return Movie.all.map(movie=> movie.renderIndexHTML()).join("")
    }

    static renderAll(){
        return (`
        <li>
        ${this.renderHTMLAll()}
        </li>
        `)
    }

    static findById(movie_id){
        return Movie.all.find((movie) => {
            return movie_id === movie.id})
    }

}