class ApiService {
    constructor() {
         this.baseUrl = `http://localhost:3000`;
    }

    async getAllMovies() {
        const resp = await fetch(this.baseUrl+"/movies")
        const data = await resp.json()
        return data 
    }

    async submitMovie(movie) {
        const res = await fetch(this.baseUrl+"/movies", {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'            
          },
          body: JSON.stringify(movie)
          });
        return res;
    }

    async submitReview(reviewData) {
        const resp = await fetch(this.baseUrl+"/reviews",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({review: reviewData})
        })
        .then(data => data.json())
        .then(res => {
          Movie.findById(res.movie_id).reviews.push(res)
          renderMovies()
        })

        // const data = await resp.json()
        // return data;
    }
    
}