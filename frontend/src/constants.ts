export const INCORRECT_PASSWORD = 'Неккоректный пароль'
export const PASSWORD_MIN_LENGTH = 'Минимум 6 символов'
export const REQUIRED_FIELD = 'Обязательно для заполнения'
export const RECURRING_MAIL = 'Пользователь с такой почтой уже существует'
export const NON_EXISTENT_USER = 'Пользователя с такой почтой не существует'
export const NO_TEACHERS = 'Доступных преподавателей нет'
export const REQUIRED_TEACHER = 'Выберите преподавателя'

export const LOGIN = 'Войти'
export const LOGOUT = 'Выйти'
export const REGISTER = 'Регистрация'
export const BACK = 'Назад'
export const CONTINUE = 'Продолжить'
export const CHECK = 'Проверить'
export const TAKE_TEST = 'Пройти тест'
export const EMAIL_LABEL = 'E-mail'
export const PASSWORD_LABEL = 'Пароль'
export const ROLE_LABEL = 'Роль'
export const BUTTON_READY = 'Готово'
export const FIRST_NAME = 'Имя'
export const SECOND_NAME = 'Фамилия'
export const TEACHER_LABEL = 'Преподаватель'
export const AVATAR_URL = 'Ссылка на фото'

export const ROLES = [
  { value: 'student', display: 'Учащийся' },
  { value: 'teacher', display: 'Преподаватель' },
]

export const APPLICATION_NAME = 'Теория Графов'
export const SCHEMA_TITLE = 'Опорная схема'

export const NOT_FOUND_PAGE_STATUS = '404'
export const NOT_FOUND_PAGE_TEXT = 'Page not found'
export const TOPICS_NOT_FOUND = 'Нет доступных тем!'

export const STUDENT = 'student'
export const TEACHER = 'teacher'

export const FIRST_SIGN_IN = 'Заполните профиль!'

export const PRIMA_KRASKALA = 'prima_kraskala'
export const initialChapter = {
  name: 'graphTheory',
  title: 'Теория Графов',
  topics: [
    {
      name: PRIMA_KRASKALA,
      title: 'Остовное дерево. Алгоритмы Прима и Краскала',
      show: true,
    },
    { name: 'floyd', title: 'Алгоритм Флойда', show: true },
    {
      name: 'streams',
      title: 'Потоки на сетях. Задача о максимальном потоке',
      show: true,
    },
    { name: 'ford_fulkerson', title: 'Алгоритм Форда-Фалкерсона', show: true },
    { name: 'basaker-guen', title: 'Алгоритм Басакера-Гоуэна', show: true },
    { name: 'klein', title: 'Алгоритм Клейна', show: true },
  ],
}

export const USERNAME_COLUMN = 'Никнейм'
export const TEST_MARK_COLUMN = 'Тест'
export const TASK_MARK_COLUMN = 'Интерактив'
export const NO_MARKS = 'Нет оценок 😔'
export const NO_RESULT = 'Нет совпадений'
