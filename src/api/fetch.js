import fetchJsonp from 'fetch-jsonp'

export function fetchBooks (keyword, page) {
  const count = 20
  const start = page * count
  let url = 'https://api.douban.com/v2/book/search?q=' + keyword + '&start=' + start
  return fetchJsonp(url).then(response => response.json())
}

export function fetchMovies (keyword, page) {
  const count = 20
  const start = page * count
  let url = 'https://api.douban.com/v2/movie/search?q=' + keyword + '&start=' + start
  return fetchJsonp(url).then(response => response.json())
}

export function fetchMusics (keyword, page) {
  const count = 20
  const start = page * count
  let url = 'https://api.douban.com/v2/music/search?q=' + keyword + '&start=' + start
  return fetchJsonp(url).then(response => response.json())
}
