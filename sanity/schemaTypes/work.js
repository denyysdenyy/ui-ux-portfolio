export const work = {
  name: 'work',
  title: 'Кейс',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва проєкту',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Односторінковий', value: 'landing' },
          { title: 'Інтернет-магазин', value: 'shop' },
          { title: 'Багатосторінковий', value: 'multipage' },
          { title: 'Мобільний додаток', value: 'mobile' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Посилання на проєкт',
      type: 'url',
    },
  ],
}