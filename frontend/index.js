function init() {
    const containerDiv = document.getElementById("container");
    const consoleForm = document.querySelector("form")

    consoleForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        containerDiv.innerHTML += newMovie.renderIndexHTML();
    })

    function getMovies() {
        fetch(`http://localhost:3000/movies`)
        .then(function(res) {
            return res.json()
        })
        .then(function (movies) {
            containerDiv.innerHTML += `<ul>`
            movies.forEach((m) => {
                const newMovie = new Movie(
                    m.title, 
                    m.release_year, 
                    m.producer, 
                    m.reviews
                    );
                    console.log(newMovie);
                    containerDiv.innerHTML += newMovie.renderIndexHTML();
            });
            containerDiv.innerHTML += `</ul>`
        });
    }
    getMovies();
}

init();