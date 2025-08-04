const questions = [
  {
    text: "What is React?",
    options: [
      { text: "A library for building user interfaces", isCorrect: true },
      { text: "A framework for working with databases", isCorrect: false },
      { text: "A programming language", isCorrect: false },
      { text: "An operating system", isCorrect: false }
    ]
  },
  {
    text: "What is JSX?",
    options: [
      { text: "HTML-like syntax used to write React components", isCorrect: true },
      { text: "A routing library", isCorrect: false },
      { text: "A build system", isCorrect: false },
      { text: "A lifecycle method", isCorrect: false }
    ]
  },
  {
    text: "Which hook is used to manage state in functional components?",
    options: [
      { text: "useState", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useMemo", isCorrect: false }
    ]
  },
  {
    text: "Which hook is used for side effects (e.g., API requests)?",
    options: [
      { text: "useEffect", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useCallback", isCorrect: false },
      { text: "useContext", isCorrect: false }
    ]
  },
  {
    text: "How do you pass data from a parent to a child component?",
    options: [
      { text: "Using props", isCorrect: true },
      { text: "Using state", isCorrect: false },
      { text: "Using useEffect", isCorrect: false },
      { text: "It’s not possible", isCorrect: false }
    ]
  },
  {
    text: "What method/approach is used for conditional rendering in React?",
    options: [
      { text: "Ternary operator or logical AND (&&)", isCorrect: true },
      { text: "if inside JSX", isCorrect: false },
      { text: "switch inside JSX", isCorrect: false },
      { text: "filter()", isCorrect: false }
    ]
  },
  {
    text: "What happens when you update state in React?",
    options: [
      { text: "The component re-renders", isCorrect: true },
      { text: "The component is removed", isCorrect: false },
      { text: "The DOM is updated directly", isCorrect: false },
      { text: "Nothing happens", isCorrect: false }
    ]
  },
  {
    text: "What is the virtual DOM?",
    options: [
      { text: "A copy of the real DOM that React uses for optimization", isCorrect: true },
      { text: "An old browser DOM", isCorrect: false },
      { text: "A manually created DOM", isCorrect: false },
      { text: "There is no such technology", isCorrect: false }
    ]
  },
  {
    text: "Can you modify props directly inside a component?",
    options: [
      { text: "No, props are read-only", isCorrect: true },
      { text: "Yes, using useEffect", isCorrect: false },
      { text: "Yes, using setState", isCorrect: false },
      { text: "Yes, but only in class components", isCorrect: false }
    ]
  },
  {
    text: "What does the useEffect hook do?",
    options: [
      { text: "Allows side effects to be performed after rendering", isCorrect: true },
      { text: "Updates state", isCorrect: false },
      { text: "Creates context", isCorrect: false },
      { text: "Allows reusability of components", isCorrect: false }
    ]
  },
  {
    text: "What happens if you don’t provide dependencies in the useEffect array?",
    options: [
      { text: "useEffect runs after every render", isCorrect: true },
      { text: "useEffect never runs", isCorrect: false },
      { text: "useEffect runs only once", isCorrect: false },
      { text: "An error occurs", isCorrect: false }
    ]
  },
  {
    text: "What does the useState hook return?",
    options: [
      { text: "An array with current value and a function to update it", isCorrect: true },
      { text: "Only the current value", isCorrect: false },
      { text: "A render function", isCorrect: false },
      { text: "An object with data", isCorrect: false }
    ]
  },
  {
    text: "Which method is used to render a list of items?",
    options: [
      { text: "Array.map()", isCorrect: true },
      { text: "Array.forEach()", isCorrect: false },
      { text: "Array.filter()", isCorrect: false },
      { text: "JSON.stringify()", isCorrect: false }
    ]
  },
  {
    text: "Why is a key used when rendering lists?",
    options: [
      { text: "So React can efficiently update elements", isCorrect: true },
      { text: "To make elements unique", isCorrect: false },
      { text: "For animations", isCorrect: false },
      { text: "For sorting", isCorrect: false }
    ]
  },
  {
    text: "What is a higher-order component (HOC)?",
    options: [
      { text: "A function that takes a component and returns a new component", isCorrect: true },
      { text: "A component that cannot be changed", isCorrect: false },
      { text: "A component that uses useEffect", isCorrect: false },
      { text: "A built-in React component", isCorrect: false }
    ]
  },
  {
    text: "Which hook gives direct access to a DOM element?",
    options: [
      { text: "useRef", isCorrect: true },
      { text: "useState", isCorrect: false },
      { text: "useMemo", isCorrect: false },
      { text: "useCallback", isCorrect: false }
    ]
  },
  {
    text: "Which hook is used to memoize computations?",
    options: [
      { text: "useMemo", isCorrect: true },
      { text: "useEffect", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useReducer", isCorrect: false }
    ]
  }

//   {
//     text: "Что такое React?",
//     options: [
//       { text: "Библиотека для построения пользовательских интерфейсов", isCorrect: true },
//       { text: "Фреймворк для работы с базами данных", isCorrect: false },
//       { text: "Язык программирования", isCorrect: false },
//       { text: "Операционная система", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что такое JSX?",
//     options: [
//       { text: "HTML-подобный синтаксис для написания компонентов React", isCorrect: true },
//       { text: "Библиотека маршрутизации", isCorrect: false },
//       { text: "Система сборки", isCorrect: false },
//       { text: "Метод жизненного цикла", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой хук используется для управления состоянием в функциональных компонентах?",
//     options: [
//       { text: "useState", isCorrect: true },
//       { text: "useEffect", isCorrect: false },
//       { text: "useRef", isCorrect: false },
//       { text: "useMemo", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой хук используется для побочных эффектов (например, запросов к API)?",
//     options: [
//       { text: "useEffect", isCorrect: true },
//       { text: "useState", isCorrect: false },
//       { text: "useCallback", isCorrect: false },
//       { text: "useContext", isCorrect: false }
//     ]
//   },
//   {
//     text: "Как передать данные от родительского компонента к дочернему?",
//     options: [
//       { text: "Через props", isCorrect: true },
//       { text: "Через state", isCorrect: false },
//       { text: "Через useEffect", isCorrect: false },
//       { text: "Нельзя передать", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой метод/подход используется для условного отображения элементов в React?",
//     options: [
//       { text: "Тернарный оператор или логическое И (&&)", isCorrect: true },
//       { text: "if внутри JSX", isCorrect: false },
//       { text: "switch внутри JSX", isCorrect: false },
//       { text: "filter()", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что произойдёт, если изменить state в React?",
//     options: [
//       { text: "Компонент перерендерится", isCorrect: true },
//       { text: "Компонент будет удалён", isCorrect: false },
//       { text: "Изменится DOM напрямую", isCorrect: false },
//       { text: "Ничего не произойдёт", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что такое виртуальный DOM?",
//     options: [
//       { text: "Копия реального DOM, которую React использует для оптимизации", isCorrect: true },
//       { text: "Старый DOM в браузере", isCorrect: false },
//       { text: "DOM, созданный вручную", isCorrect: false },
//       { text: "Никакой такой технологии нет", isCorrect: false }
//     ]
//   },
//   {
//     text: "Можно ли напрямую изменить props внутри компонента?",
//     options: [
//       { text: "Нет, props только для чтения", isCorrect: true },
//       { text: "Да, если использовать useEffect", isCorrect: false },
//       { text: "Да, если использовать setState", isCorrect: false },
//       { text: "Можно, но только в class-компонентах", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что делает хук useEffect?",
//     options: [
//       { text: "Позволяет выполнять побочные эффекты после рендера", isCorrect: true },
//       { text: "Обновляет состояние", isCorrect: false },
//       { text: "Создаёт контекст", isCorrect: false },
//       { text: "Позволяет повторно использовать компоненты", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что произойдёт, если не указать зависимости в массиве useEffect?",
//     options: [
//       { text: "useEffect будет вызываться после каждого рендера", isCorrect: true },
//       { text: "useEffect никогда не вызовется", isCorrect: false },
//       { text: "useEffect сработает один раз", isCorrect: false },
//       { text: "Будет ошибка", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что возвращает хук useState?",
//     options: [
//       { text: "Массив из текущего значения и функции для его изменения", isCorrect: true },
//       { text: "Только текущее значение", isCorrect: false },
//       { text: "Функцию рендера", isCorrect: false },
//       { text: "Объект с данными", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой метод используется для отображения списка элементов?",
//     options: [
//       { text: "Array.map()", isCorrect: true },
//       { text: "Array.forEach()", isCorrect: false },
//       { text: "Array.filter()", isCorrect: false },
//       { text: "JSON.stringify()", isCorrect: false }
//     ]
//   },
//   {
//     text: "Для чего используется ключ (key) при рендере списков?",
//     options: [
//       { text: "Чтобы React мог эффективно обновлять элементы", isCorrect: true },
//       { text: "Чтобы сделать элементы уникальными", isCorrect: false },
//       { text: "Для анимаций", isCorrect: false },
//       { text: "Для сортировки", isCorrect: false }
//     ]
//   },
//   {
//     text: "Что такое компонент высшего порядка (HOC)?",
//     options: [
//       { text: "Функция, принимающая компонент и возвращающая новый компонент", isCorrect: true },
//       { text: "Компонент, который нельзя изменить", isCorrect: false },
//       { text: "Компонент, использующий useEffect", isCorrect: false },
//       { text: "Компонент, встроенный в React", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой хук позволяет получить доступ к DOM-элементу напрямую?",
//     options: [
//       { text: "useRef", isCorrect: true },
//       { text: "useState", isCorrect: false },
//       { text: "useMemo", isCorrect: false },
//       { text: "useCallback", isCorrect: false }
//     ]
//   },
//   {
//     text: "Какой хук используют для кэширования вычислений?",
//     options: [
//       { text: "useMemo", isCorrect: true },
//       { text: "useEffect", isCorrect: false },
//       { text: "useRef", isCorrect: false },
//       { text: "useReducer", isCorrect: false }
//     ]
//   }
];

export default questions;