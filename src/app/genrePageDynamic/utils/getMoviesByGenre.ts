export const getMoviesByGenre =  async () => {
    const moviesByGenre =  await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${id}&page=${page}`
    );
    return moviesByGenre;
  };  