class ApiServices {

    constructor() {
         this.baseUrl = `http://localhost:3000`;
    }

    async getMovies() {
        const resp = await fetch(this.baseUrl+"/movies")
        const data = await resp.json()
        debugger
    }

    // getAllMoviesthen() {
    //     fetch(this.baseUrl+"/movies")
    //     .then(resp => resp.json())
    //     .then( data => {
    //         debugger
    //     })
    // }



}