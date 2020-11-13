import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import fetchMovies from '../api/movieApi';

class MovieList extends Component {

  async componentDidMount() {
    const movies = await fetchMovies();
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