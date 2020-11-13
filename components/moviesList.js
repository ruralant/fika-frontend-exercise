import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import fetchMovies from '../api/movieApi';
import fetchGenres from '../api/genresApi';

class MovieList extends Component {

  async componentDidMount() {
    try {
      const movies = await fetchMovies();
      const genres = await fetchGenres();

      let formattedMovies = {...movies};
      formattedMovies = Object.values(formattedMovies);

      formattedMovies.forEach(movie => {
        const movieGenres = movie.genre_ids.map(genre => {
          const genreString = genres.find(g => g.id === genre);
          return genreString;
        })
        movie.genres = movieGenres;
        delete movie.genre_ids;
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <SafeAreaView>
        <Text>I'm a movies list</Text>
      </SafeAreaView>
    )
  }
}

export default MovieList;