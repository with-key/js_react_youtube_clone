//class creation
class TheMovie {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.results)
      .catch((error) => console.log("error", error));
  }

  search(query) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&api_key==${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.results)
      .catch((error) => console.log("error", error));
  }
}

export default TheMovie;
