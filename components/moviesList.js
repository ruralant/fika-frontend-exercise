import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, View, Image, ActivityIndicator } from 'react-native';
import fetchMovies from '../api/movieApi';
import fetchGenres from '../api/genresApi';

class MovieList extends Component {
  state = {
    movies: [],
    loading: true
  }

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

      this.setState({ movies: formattedMovies, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies, loading } = this.state;

    const renderItem = ({ item }) => (
      <Item title={item.title} imageUrl={item.poster_path} />
    );

    const Item = ({ title, imageUrl }) => (
      <View>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500/${imageUrl}`}}/>
        <Text>{title}</Text>
      </View>
    );

    if(!loading) {
      return (
        <SafeAreaView>
          <FlatList 
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id} 
            />
        </SafeAreaView>
      )
    } else {
        return <ActivityIndicator />
    }
  }
}

export default MovieList;