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

    async submitReview(e) {
        e.preventDefault();
        const res = await fetch(this.baseUrl+"/movies/:id", {
          method: "POST",
          body: e
        });
        return res;
    }
    
}