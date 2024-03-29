// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

export function createMarkUp(images) {
  const markUp = images
    .map(
      image => `<li class="gallery-item">
  <a
    href=${image.largeImageURL}
    ><img
      src=${image.webformatURL}
      alt=${image.tags}
  /></a>
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${image.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${image.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${image.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${image.downloads}</p>
    </li>
  </ul>
</li>

`
    )
    .join(' ');
}
