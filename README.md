# goit-js-hw-11

### Завдання — Пошук зображень
Створи застосунок пошуку зображень за ключовим словом і їх перегляду в галереї. Додай оформлення елементів інтерфейсу згідно з макетом.

Форма пошуку
Форма пошуку міститься в HTML-документі. Користувач буде вводити рядок для пошуку в текстове поле, а за сабмітом форми необхідно виконувати HTTP-запит із цим пошуковим рядком.

При натисканні на кнопку відправки форми, додайте перевірку вмісту текстового поля на наявність порожнього рядка, щоб користувач не міг відправити запит, якщо поле пошуку порожнє.

HTTP-запити
Для бекенду використовуй публічний API сервіс Pixabay. Зареєструйся, отримай свій унікальний ключ доступу і ознайомся з документацією.

Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

key — твій унікальний ключ доступу до API.
q — слово для пошуку. Те, що буде вводити користувач.
image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
orientation — орієнтація фотографії. Постав значення horizontal.
safesearch — фільтр за віком. Постав значення true.
У відповіді буде об’єкт із декількома властивостями, в одному з яких буде масив зображень, що задовольнили критерії параметрів запиту.

Якщо бекенд повертає порожній масив, значить, нічого підходящого не було знайдено. У такому разі показуй повідомлення з текстом "Sorry, there are no images matching your search query. Please try again!". Для повідомлень використовуй бібліотеку iziToast.

Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.
