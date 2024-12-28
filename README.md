# Mirror App Frontend Test

Тестовое задание на Frontend разработчика

<details>
   <summary>
     О компании
   </summary>
    Наша компания (Mirror App) занимается разработкой конструктора (No Code) виджетов новостной ленты социальных сетей. Мы предоставляем пользователю интерфейс в котором он подключает аккаунт своей социальной сети (Facebook, Instagram, TikTok, etc...) и может настраивать вид своих постов (сетку раскладки, цвет заднего фона, шрифт, цвет текста и др.). После настройки пользователь/клиент может встроить настроенный виджет к себе в приложение/сайт/CMS. Наша основная задача - обеспечить корректную работу настроенного виджета в пользовательской среде, а также предоставлять пользователю широкий функционал по кастомизации. Наши планы - расширить количество сервисов с подключениями к социальным сетям и обеспечить легкую и гибкую масштабируемость.
</details>

#### ВАЖНО! Перед начало работы сделайте Fork данного репозитория к себе.

## Запуск

1. Убедитесь, что вы находитесь в корневой папке.
2. Установить зависимости `npm install`.
3. Запустите клиентскую и серверную части `npm run start`
4. Проверьте, запустился ли клиентский сервер по адресу - `http://localhost:5173`.
5. Проверьте, запустилась ли серверная часть по адресу - `http://localhost:4000`
6. Если всё работает, вы молодец! Можете приступать к выполнению задания. Удачи!

## Описание репозитория и нефункциональные требования

Мы подготовили для Вас задание, максимально приближенное к текущему функционалу нашего приложения. Целью служит оценить Ваш подход к построению гибких (масштабируемых) интерфейсов.

Перед дальнейшим прочтением ознакомьтесь с пунктом `Запуск`.

1. Тестовое задание необходимо реализовать с использованием представленного API. В папке `/server` расположен фейковый JSON-server с заранее подготовленными данными. При запуске сервера будут генерироваться новые данные. Описание сервера Вы найдете в [README](./server/README.md).

2. В папке `/client` расположено настроенное окруженное с установленной библиотекой React.

## Функциональные требования

Приложение должно состоять из одной страницы с постами, включающую в себя панель с кнопкой обновления настроек.

**На странице постов:**

1. Отображается список постов, согласно полученным настройкам (количество колонок и рядов соответствует текущему layout). Layout могут быть разными и содержать не только columns и rows (в наших приложениях layout есть в виде слайдера или коллажа). Для упрощения выполнения тестового мы урезали до двух с одинаковыми параметрами, однако важно понимать, что они могут быть разными (визуально) и с разными параметрами.
2. В зависимости от типа навигации (в настройках) реализована пагинации или кнопка "Load More".
3. В зависимости от типа карточки (в настройках) меняется интерфейс карточки. Интерфейс карточек вы разрабатываете самостоятельно.
4. В карточке поста есть следующая информация:
   - Описание поста
   - Количество лайков
   - Количество комментариев
   - Дата поста (если меньше 7 дней, то выводить: "1 день назад", "2 дня назад" и т.д., если больше, вывести дату в формате день/месяц/год)
   - Информация о пользователе (имя пользователя)

**Панель:**

1. По нажатии на кнопку "Обновить настройки" интерфейс постов должен обновиться согласно новым настройкам.
2. Вывод информации о текущих настройках.

#### ВАЖНО! Приложение не должно ломаться при добавлении/удалении нового layout или template. Добавлять или удалять layout, как и template должно быть легко и с минимальным изменением текущего функционала и кодовой базы.

## Нефункциональные требования:

1. Использование [TypeScript](typescript).
2. Использование библиотеки [React 18](react).
3. Можно использовать любую доступную UI библиотеку или использовать другие доступные методы стилизации (CSS/SASS/SCSS, CSS-in-JS, TailwindCSS, etc..).
4. В файле `/client` [README](/client/README.md) напишите какие инструменты для разработки вы использовали (описывать причину выбора не надо).
5. Сделайте деплой клиентской и серверной части.

#### ВАЖНО! Приложение не должно ломаться при добавлении/удалении типа навигации. Добавлять или удалять тип навигации должно быть легко и с минимальным изменением текущего функционала и кодовой базы.

## Возможные ошибки

Если вы столкнулись с ошибками в коде серверной части или у Вас есть вопросы по выполнению, то сообщите нам на Github в разделе `Issues`.

## А дальше?

После выполнения тестового пришлите Нам ссылку на ваш репозиторий.
