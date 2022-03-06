export const INCORRECT_PASSWORD = 'Неккоректный пароль'
export const REQUIRED_FIELD = 'Обязательно для заполнения'
export const RECURRING_MAIL = 'Пользователь с такой почтой уже существует'

export const LOGIN = 'Войти'
export const LOGOUT = 'Выйти'
export const REGISTER = 'Регистрация'
export const BACK = 'Назад'
export const CONTINUE = 'Продолжить'
export const EMAIL_LABEL = 'E-mail'
export const PASSWORD_LABEL = 'Пароль'
export const ROLE_LABEL = 'Роль'

export const ROLES = [
  { value: 'student', display: 'Учащийся' },
  { value: 'teacher', display: 'Преподаватель' },
]

export const SUBMIT_CONSOLE = 'Отправить'
export const FORMAT_CONSOLE = 'Форматировать'

export const APPLICATION_NAME = 'API-консолька'

export const CONSOLE_QUERY_TITLE = 'Запрос:'
export const CONSOLE_RESPONSE_TITLE = 'Ответ:'

export const DROPDOWN_ACTIONS = [
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { name: 'Выполнить', action: (): void => {}, isDestructive: false },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { name: 'Скопировать', action: (): void => {}, isDestructive: false },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { name: 'Удалить', action: (): void => {}, isDestructive: true },
]

export const NOT_FOUND_PAGE_STATUS = '404'
export const NOT_FOUND_PAGE_TEXT = 'Page not found'
