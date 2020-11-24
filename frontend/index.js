const api = new ApiService();

const init = () =>{
    bindEventListeners();
    fetchRenderMovies()
}

const movieContent = document.getElementById("movie-show")
const newMovieForm = document.getElementById('movie-form')


function bindEventListeners() {
    // const reviewDropDown = document.getElementById('review-show');
    const newReviewForm = document.getElementById('add-review');
  
    newMovieForm.addEventListener('submit', movieFormSubmission);
    // reviewDropDown.addEventListener('click', renderReviews);
    // newReviewForm.addEventListener('submit', submitReview);
  }

//  function addReviewForm(){
//       let form = document.getElementById("add-review")
//       document.getElementById("add-review").addEventListener('click', function() {
//           if(form.style.display === 'none') {
//               form.style.display = 'block';
//           } else {
//               form.style.display = 'none';
//           }
//   })
//  }

function bindReviewEvent(){
    reviewBtns = Array.from(document.querySelectorAll(".review-btn"))
    for( btn of reviewBtns){
        btn.addEventListener("click", function(e){
            const reviewDiv = document.querySelector(`review-${e.target.id.split("movie-")[1]}`)
                if(reviewDiv.contains("review-form")){
                    reviewDiv.remove("review-form")
                }else{
                    reviewDiv.classList.add("review-form")
                }
        })
    }
}

function bindReviewForm(){
    const reviewForms = document.getElementById('review-form')
    for(form of reviewForms){
        form.addEventListener("submit", function(e){
        })
    }
}

async function fetchRenderMovies() {
    const movies = await api.getAllMovies()
    for(movie of movies){
        new Movie(movie)
    }
   renderMovies()
}

function renderMovies() {
    movieContent.innerHTML = ""
    movieContent.innerHTML += Movie.renderHTMLAll()
    submitReview()
    bindReviewEvent()
}

function renderMovie(m) {
    const renderMovie = m.renderIndexHTML() 
    movieContent.innerHTML += renderMovie
}

async function movieFormSubmission(e){
    e.preventDefault();
    let title = document.getElementById("title").value
    let release_year = document.getElementById("release_year").value
    let producer = document.getElementById("producer").value
    let movie = {
        title: title,
        release_year: release_year,
        producer: producer
    }
    const res = await api.submitMovie(movie);
        res.json()
    .then(movie => {
        movie.reviews = []
        let m = new Movie(movie)
        renderMovie(m);
    })
}

function submitReview(){
    review_forms = Array.from(document.querySelectorAll(".review-form"))
    for (form  of review_forms){
        form.addEventListener("submit", function(e){
            e.preventDefault()
            const movieId = e.target.id
            const reviewData = {
                movie_id: Number.parseInt(movieId),
                comment: e.target.querySelector("#comment").value,
                rating: e.target.querySelector("#rating").value
            }
            api.submitReview(reviewData)
        })
    }
}

  init()