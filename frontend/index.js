function init() {
    const containerDiv = document.getElementById("container");

    function getMovies() {
        fetch(`http://localhost:3000/movies`)
        .then(function(res) {
            return res.json()
        })
        .then(function (data) {

        });
    }
    getMovies();
}

init();