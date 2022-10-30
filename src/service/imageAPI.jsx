export default function api(imageName, page) {
  const PARAMS = `key=29851600-77a83c2f849f78e300f57ecf1&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error());
  });
}
