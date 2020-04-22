let movies = [
  {
    id: 0,
    name: "Star Wars - the new one",
    score: 0,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 99,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterdMovies = movies.filter((movie) => movie.id === id);
  return filterdMovies[0];
};

export const deleteMovie = (id) => {
  const deletedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > deletedMovies.length) {
    movies = deletedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name: name,
    score: score,
  };
  movies.push(newMovie);
  return newMovie;
};
