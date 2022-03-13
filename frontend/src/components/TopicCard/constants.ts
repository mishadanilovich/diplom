import { NavigateFunction } from 'react-router-dom'

export const actions = (navigate: NavigateFunction) => [
  { title: 'Теория', action: () => navigate('theory') },
  { title: 'Опорная схема', action: () => navigate('schema') },
  { title: 'Тест', action: () => navigate('test') },
  { title: 'Интерактивное задание', action: () => navigate('task') },
]
