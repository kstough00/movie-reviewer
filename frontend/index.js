function init() {
    const containerDiv = document.getElementById("container");

    function getMovies() {
        fetch(`http://localhost:3000/movies`)
        .then(function(res) {
            return res.json()
        })
        .then(function (movies) {
            movies.forEach((m) => {
                const newMovie = new Movie(
                    m.title, 
                    m.release_year, 
                    m.producer, 
                    m.reviews
                );
                console.log(newMovie);
                containerDiv.innerHTML += `<ul>`
                containerDiv.innerHTML += newMovie.renderIndexHTML();
            });
            containerDiv.innerHTML += `</ul>`
        });
    }
    getMovies();
}

init();