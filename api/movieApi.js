export default async function fetchMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1')
    let movies = await response.json();
    movies = Object.values(movies.results);
    return movies;
  } catch (e) {
    console.log(e)
  }
}