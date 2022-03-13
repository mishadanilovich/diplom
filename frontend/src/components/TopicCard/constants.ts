import { NavigateFunction } from 'react-router-dom'

export const actions = (navigate: NavigateFunction) => [
  { title: 'Теория', action: () => navigate('') },
  { title: 'Опорная схема', action: () => navigate('') },
  { title: 'Тест', action: () => navigate('') },
  { title: 'Интерактивное задание', action: () => navigate('') },
]
