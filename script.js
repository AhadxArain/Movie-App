const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = "https://api.themoviedb.org/3/movie/popular";
const apiKey = "d8626a4f42d6656fe3de98a003ac797a";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODYyNmE0ZjQyZDY2NTZmZTNkZTk4YTAwM2FjNzk3YSIsIm5iZiI6MTczMDkxMzcwNy43MjYzNDcsInN1YiI6IjY3MjllNmZmMjZiNjA1YmMxOWU1NjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyC5Vn3kddNRysFJ1mBFwmc-QxosxLsqjAyofhNvElI",
  },
};
const cardsContainer = document.querySelector(".card-cont");
function getMovies(url) {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      data.results.forEach((element) => {
        console.log(element)
        cardsContainer.innerHTML += ` <div class="card m-2" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top" height="250px" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.original_title}</h5>
                    <div class="overview-container"><p class="card-text">${element.overview}</p></div>
                    <hr>
                    <a href="./movie.html?id=${element.id}" class="btn btn-primary mt-2">View Movie</a>
                </div>
            </div>`;
      });
    })
    .catch((err) => console.error(err));
}
getMovies(apiUrl);
