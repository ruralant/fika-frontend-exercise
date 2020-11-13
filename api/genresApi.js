export default async function fetchGenres(){
  try {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4d35479d755b5aec9f34f062336c0d4d&language=en-US')
    const genres = await response.json();
    return genres.genres;
  } catch (error) {
    throw new Error(error);
  }
}