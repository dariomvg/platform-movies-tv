export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_API_TOKEN || '',
  },
};

export const api_key = process.env.TMDB_API_KEY || ''

export const url_api = "https://api.themoviedb.org/3"
export const url_image = "https://image.tmdb.org/t/p"
export const url_trailer = "https://www.youtube.com/watch?v="

export const full_image = `${url_image}/original`
export const poster_image = `${url_image}/w300`

 