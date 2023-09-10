# CRUD

===

Базовый CRUD без обновления при работе с HTTP.

Backend находится в каталоге `backend`.

![CRUD](./assets/notes-app.png)

## Общая механика

Первоначальная загрузка: делается http-запрос GET на адрес <http://localhost:7070/notes>, полученные данные отображаются в виде карточек с возможностью удаления.

Добавление:

1. Вы заполняете форму и нажимаете кнопку «Добавить».
2. Выполняется http-запрос POST на адрес <http://localhost:7070/notes>, в теле запроса передаётся следующий JSON:

```json
{
    "id": 0,
    "content": "То, что было введено в поле ввода"
}
```

3. После чего делается запрос на получение всех записей и происходит обновление списка — GET <http://localhost:7070/notes>.

Удаление:

1. Вы нажимаете на крестик на одной из карточек.
2. Выполняется http-запрос DELETE на адрес <http://localhost:7070/notes/{id}>, где id — это идентификатор заметки.
3. После чего делается запрос на получение всех записей и происходит обновление списка — GET <http://localhost:7070/notes>.

Обновление:

1. Вы нажимаете на кнопку «Обновить» — две зелёные стрелочки.
2. После чего делается запрос на получение всех записей и происходит обновление списка — GET <http://localhost:7070/notes>.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
