// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

// key — твій унікальний ключ доступу до API.  43101979-d4b3d95f27087e7220544f5cb
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.

export function getImages(query) {
  const queryTrimed = query.trim();
  if (queryTrimed === '') return;

  const API_KEY = '43101979-d4b3d95f27087e7220544f5cb';
  const baseURL = 'https://pixabay.com/api/?key=';

  const options = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const URL = baseURL + API_KEY + '&q=' + queryTrimed;
  return fetch(URL, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// const URL =
//   'https://pixabay.com/api/?key=' +
//   API_KEY +
//   '&q=' +
//   encodeURIComponent('red roses');

// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) {
//       console.log(hit.pageURL);
//     });
//   else console.log('No hits');
// });
