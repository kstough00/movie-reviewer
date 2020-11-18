function init() {
    const containerDiv = document.getElementById("container");
    const consoleForm = document.querySelector("form")

    consoleForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let title = document.getElementById("title").value
        let release_year = document.getElementById("release_year").value
        let producer = document.getElementById("producer").value

        let movie = {
            title: title,
            release_year: release_year,
            producer: producer
        }

        fetch(`http://localhost:3000/movies` , {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(movie)
        })
        .then(resp => resp.json())
        .then(movie => {
            let m = new Movie(movie.id, movie.title, movie.release_year, movie.producer)
            m.renderMovie();
        })
        
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