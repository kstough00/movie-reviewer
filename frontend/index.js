console.log("Movies Rule")

const api = new ApiService();

const init = () =>{
    renderMovies()
    bindEventListeners();
}

function bindEventListeners() {
    const newMovieForm = document.getElementById('movie-form');
    const newReviewForm = document.getElementById('review-form');
  
    newMovieForm.addEventListener('submit', submitMovie);
    newReviewForm.addEventListener('submit', submitReview);
  }

// function

async function renderMovies() {
    const movies = await api.getAllMovies()
    for(movie of movies){
        new Movie(movie)
    }
    const movieContent = document.getElementById("movie-show")
    movieContent.innerHTML += Movie.renderHTMLAll()
}

async function submitMovie(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await apiService.submitMovie(formData);
    if (res.ok) {
      renderMovies();
      e.target.reset();
    }
  }


// bindEventListeners(){
//     let form = document.getElementById("movie-show")
//     document.getElementById("movie-show").addEventListener('click', function() {
//         if(form.style.display === 'none') {
//             form.style.display = 'block';
//         } else {
//             form.style.display = 'none';
//         }
// })

init()





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

//     function getMovies() {
//         fetch(`http://localhost:3000/movies`)
//         .then(function(res) {
//             return res.json()
//         })
//         .then(function (movies) {
//             containerDiv.innerHTML += `<ul>`
//             movies.forEach((m) => {
//                 const newMovie = new Movie(
//                     m.title, 
//                     m.release_year, 
//                     m.producer, 
//                     m.reviews
//                     );
//                     console.log(newMovie);
//                     containerDiv.innerHTML += newMovie.renderIndexHTML();
//             });
//             containerDiv.innerHTML += `</ul>`
//         });
//     }
//     getMovies();
// }

// init();