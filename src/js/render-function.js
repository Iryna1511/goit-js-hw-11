// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

export function createMarkUp(images) {
  const markUp = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a
    href=${largeImageURL}
    ><img
      src=${webformatURL}
      alt=${tags}
  /></a>
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${downloads}</p>
    </li>
  </ul>
</li>

`
    )
    .join(' ');
}
