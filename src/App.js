import React from "react";
import movieDatas from "./movieDatas";
import HighMovie from "./components/HighMovie";
import Movie from "./components/Movie";
import "./App.css";

class App extends React.Component {
  state = {
    movies: [],
    highMovies: [],
  };

  getMovies = async () => {
    const movies = await movieDatas.movies;
    this.setState({ movies: movies });
    this.getHighMovies(movies);
  };

  getHighMovies(movies) {
    const arrSorted = movies.sort((a, b) => {
      const avgA = (a.bbs + a.dys) / 2;
      const avgB = (b.bbs + b.dys) / 2;
      return avgB - avgA;
    });
    const highMovies = arrSorted.slice(0, 10);
    this.setState({ highMovies: highMovies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, highMovies } = this.state;

    return (
      <div className="container">
        <h1>본 영화</h1>
        <section className="highmovies">
          <h3>🏆 평점 명예의 전당</h3>
          <div className="highmovies__item">
            {highMovies.map((movie) => (
              <HighMovie
                key={movie.id}
                id={movie.id}
                poster={movie.poster}
                title={movie.title}
                avgRating={(movie.bbs.rate + movie.dys.rate) / 2}
              />
            ))}
          </div>
        </section>

        <section className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              backgroundPoster={movie.background_post}
              title={movie.title}
              avgRating={(movie.bbs.rate + movie.dys.rate) / 2}
              genre={movie.genre}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
