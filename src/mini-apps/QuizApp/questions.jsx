const questions = [
  {
    text: "Что такое React?",
    options: [
      { text: "Библиотека для построения пользовательских интерфейсов", isCorrect: true },
      { text: "Фреймворк для работы с базами данных", isCorrect: false },
      { text: "Язык программирования", isCorrect: false },
      { text: "Операционная система", isCorrect: false }
    ]
  },
  {
    text: "Что такое JSX?",
    options: [
      { text: "HTML-подобный синтаксис для написания компонентов React", isCorrect: true },
      { text: "Библиотека маршрутизации", isCorrect: false },
      { text: "Система сборки", isCorrect: false },
      { text: "Метод жизненного цикла", isCorrect: false }
    ]
  },
  {
    text: "Какой хук используется для управления состоянием в функциональных компонентах?",
    options: [
      { text: "useState", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useMemo", isCorrect: false }
    ]
  },
  {
    text: "Какой хук используется для побочных эффектов (например, запросов к API)?",
    options: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useCallback", isCorrect: false },
      { text: "useContext", isCorrect: false }
    ]
  },
  {
    text: "Как передать данные от родительского компонента к дочернему?",
    options: [
      { text: "Через props", isCorrect: true },
      { text: "Через state", isCorrect: false },
      { text: "Через useEffect", isCorrect: false },
      { text: "Нельзя передать", isCorrect: false }
    ]
  },
  {
    text: "Какой метод/подход используется для условного отображения элементов в React?",
    options: [
      { text: "Тернарный оператор или логическое И (&&)", isCorrect: true },
      { text: "if внутри JSX", isCorrect: false },
      { text: "switch внутри JSX", isCorrect: false },
      { text: "filter()", isCorrect: false }
    ]
  },
  {
    text: "Что произойдёт, если изменить state в React?",
    options: [
      { text: "Компонент перерендерится", isCorrect: true },
      { text: "Компонент будет удалён", isCorrect: false },
      { text: "Изменится DOM напрямую", isCorrect: false },
      { text: "Ничего не произойдёт", isCorrect: false }
    ]
  },
  {
    text: "Что такое виртуальный DOM?",
    options: [
      { text: "Копия реального DOM, которую React использует для оптимизации", isCorrect: true },
      { text: "Старый DOM в браузере", isCorrect: false },
      { text: "DOM, созданный вручную", isCorrect: false },
      { text: "Никакой такой технологии нет", isCorrect: false }
    ]
  },
  {
    text: "Можно ли напрямую изменить props внутри компонента?",
    options: [
      { text: "Нет, props только для чтения", isCorrect: true },
      { text: "Да, если использовать useEffect", isCorrect: false },
      { text: "Да, если использовать setState", isCorrect: false },
      { text: "Можно, но только в class-компонентах", isCorrect: false }
    ]
  },
  {
    text: "Что делает хук useEffect?",
    options: [
      { text: "Позволяет выполнять побочные эффекты после рендера", isCorrect: true },
      { text: "Обновляет состояние", isCorrect: false },
      { text: "Создаёт контекст", isCorrect: false },
      { text: "Позволяет повторно использовать компоненты", isCorrect: false }
    ]
  },
  {
    text: "Что произойдёт, если не указать зависимости в массиве useEffect?",
    options: [
      { text: "useEffect будет вызываться после каждого рендера", isCorrect: true },
      { text: "useEffect никогда не вызовется", isCorrect: false },
      { text: "useEffect сработает один раз", isCorrect: false },
      { text: "Будет ошибка", isCorrect: false }
    ]
  },
  {
    text: "Что возвращает хук useState?",
    options: [
      { text: "Массив из текущего значения и функции для его изменения", isCorrect: true },
      { text: "Только текущее значение", isCorrect: false },
      { text: "Функцию рендера", isCorrect: false },
      { text: "Объект с данными", isCorrect: false }
    ]
  },
  {
    text: "Какой метод используется для отображения списка элементов?",
    options: [
      { text: "Array.map()", isCorrect: true },
      { text: "Array.forEach()", isCorrect: false },
      { text: "Array.filter()", isCorrect: false },
      { text: "JSON.stringify()", isCorrect: false }
    ]
  },
  {
    text: "Для чего используется ключ (key) при рендере списков?",
    options: [
      { text: "Чтобы React мог эффективно обновлять элементы", isCorrect: true },
      { text: "Чтобы сделать элементы уникальными", isCorrect: false },
      { text: "Для анимаций", isCorrect: false },
      { text: "Для сортировки", isCorrect: false }
    ]
  },
  {
    text: "Что такое компонент высшего порядка (HOC)?",
    options: [
      { text: "Функция, принимающая компонент и возвращающая новый компонент", isCorrect: true },
      { text: "Компонент, который нельзя изменить", isCorrect: false },
      { text: "Компонент, использующий useEffect", isCorrect: false },
      { text: "Компонент, встроенный в React", isCorrect: false }
    ]
  },
  {
    text: "Какой хук позволяет получить доступ к DOM-элементу напрямую?",
    options: [
      { text: "useRef", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useMemo", isCorrect: false },
      { text: "useCallback", isCorrect: false }
    ]
  },
  {
    text: "Какой хук используют для кэширования вычислений?",
    options: [
      { text: "useMemo", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useReducer", isCorrect: false }
    ]
  }
];

export default questions;