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
         ${this.reviews.length} 
         <a class id="movie-${this.id}" href=""> Reviews</a></li>
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