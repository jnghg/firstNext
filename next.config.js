const API_KEY = process.env.MOVIE_API_KEY;

module.exports = {
  reactStrictMode: true,

  /**
   * url을 변경시켜줌.
   * source 경로에 있는 url로 접속 시 destination으로 변경
   */
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },

  /**
   * redirects와 다르게 url은 변경되지 않음
   */
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
