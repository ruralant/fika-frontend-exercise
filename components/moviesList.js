import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import fetchMovies from '../api/movieApi';
import fetchGenres from '../api/genresApi';

class MovieList extends Component {

  async componentDidMount() {
    try {
      const movies = await fetchMovies();
      const genres = await fetchGenres();
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