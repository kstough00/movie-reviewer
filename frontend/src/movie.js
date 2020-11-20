class Movie {

    static all = []

    constructor(Obj){
        this.id = Obj.id
        this.title = Obj.title
        this.release_year = Obj.release_year
        this.producer = Obj.producer
        this.reviews = Obj.reviews
        Movie.all.push(this)
    }

    renderIndexHTML() {
        return (`
        <li>${this.title},
         ${this.release_year},
         ${this.producer},
         Reviews: ${this.reviews.length} 
            <form id= "movie-form">
         <ul>
         ${this.reviews.map(review=> `<li> ${review.comment}: Rating:${review.rating}</li>`).join("")}
         </ul>
         <h1><button type="button" id="movie-${this.id}" class="btn btn-sm btn-outline-secondary movies-btn"> Add Review</button></h1>
        <br>
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

}