class Movie {

    static all = []

    constructor(Obj){
        this.title = Obj.title
        this.release_year = Obj.release_year
        this.producer = Obj.producer
        this.reviews = Obj.reviews
        Movie.all.push(this)
    }

    renderIndexHTML() {
        return (`<li>${this.title},
         ${this.release_year},
         ${this.producer},
         ${this.reviews.length} 
         <a class="nav-link" href=""> Reviews</a></li>
         `)
    }

    static renderHTMLAll(){
        return Movie.all.map(movie=> movie.renderIndexHTML()).join("")
        // return `<div>
        //     <h1>${this.title}</h1>
        //     ${this.reviews.map((review) => `<p>${review.comment} - ${review.rating}</p>`).join("")}
        //     </div>`;
    }

    static renderAll(){
        return (`
        <li>
        ${this.renderHTMLAll()}
        </li>
        `)
    }



}