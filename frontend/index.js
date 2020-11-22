console.log("Movies Rule")

const api = new ApiService();

const init = () =>{
    bindEventListeners();
    renderMovies()
}

const movieContent = document.getElementById("movie-show")
const newMovieForm = document.getElementById('movie-form')


function bindEventListeners() {
    // const reviewDropDown = document.getElementById('review-show');
    // const newReviewForm = document.getElementById('review-form');
  
    newMovieForm.addEventListener('submit', movieFormSubmission);
    // reviewDropDown.addEventListener('click', renderReviews);
    // newReviewForm.addEventListener('submit', submitReview);
  }

async function renderMovies() {
    const movies = await api.getAllMovies()
    for(movie of movies){
        new Movie(movie)
    }
    movieContent.innerHTML += Movie.renderHTMLAll()
}

function renderMovie(m) {
    const renderMovie = m.renderIndexHTML() 
    debugger
    movieContent.innerHTML += renderMovie

}

async function movieFormSubmission(e){
    e.preventDefault();
    // debugger
    let title = document.getElementById("title").value
    let release_year = document.getElementById("release_year").value
    let producer = document.getElementById("producer").value
    // debugger
    let movie = {
        title: title,
        release_year: release_year,
        producer: producer
    }
    const res = await api.submitMovie(movie);
    // .then(res => 
        res.json()
        // debugger
    .then(movie => {
        movie.reviews = []
        let m = new Movie(movie)
        renderMovie(m);
    })
    
}

// function submitReview(){
//     const reviewForms = document.querySelectorAll("review-form")
//     for (review  of review-form){
//         form.addEventListener("submit", function(e){
//             e.preventDefault()
//             const movieId = e.target.parentElement.parentElement.id.split("reviews-")[1]
//             const reviewData = {
//                 movie_id = movieId,
//                 comment = e.target.querySelector(".comment").value,
//                 review = e.target.querySelector(".review").value
//             }
//             api.submitReview(movieData)
//         })
//     }
// }

  
  init()
  
  
  // bindEventListeners(){
  //     let form = document.getElementById("movie-show")
  //     document.getElementById("movie-show").addEventListener('click', function() {
  //         if(form.style.display === 'none') {
  //             form.style.display = 'block';
  //         } else {
  //             form.style.display = 'none';
  //         }
  // })
  


// document.addEventListener("DOMContentLoaded", () => {
//     getMovies();
// })

// function init() {
//     const containerDiv = document.getElementById("container");
//     const consoleForm = document.querySelector("form")

//     consoleForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//         let title = document.getElementById("title").value
//         let release_year = document.getElementById("release_year").value
//         let producer = document.getElementById("producer").value

//         let movie = {
//             title: title,
//             release_year: release_year,
//             producer: producer
//         }

//         fetch(`http://localhost:3000/movies` , {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify(movie)
//         })
//         .then(resp => resp.json())
//         .then(movie => {
//             let m = new Movie(movie.id, movie.title, movie.release_year, movie.producer)
//             m.renderMovie();
//         })
        
//         containerDiv.innerHTML += newMovie.renderIndexHTML();
//     })
