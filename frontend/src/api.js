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
        // debugger
        return res;
    }

    async submitReview(reviewData) {
        e.preventDefault();
        const res = await fetch(this.baseUrl+"/movies",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(reviewData)
        });
        const data = await resp.json()
        return data;
    }
    
}