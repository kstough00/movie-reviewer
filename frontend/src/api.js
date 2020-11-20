class ApiService {
    constructor() {
         this.baseUrl = `http://localhost:3000`;
    }

    async getAllMovies() {
        const resp = await fetch(this.baseUrl+"/movies")
        const data = await resp.json()
        return data 
    }

    async submitMovie(movieData) {
        const res = await fetch(this.baseUrl+"/movies"), {
          method:"POST",
          body: movieData,
        });
        return res;
      }
    }



}