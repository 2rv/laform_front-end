export const options = {
  default: 'paragraph',
  autofocus: true,
  minHeight: 100,

  //   onReady: () => console.count('READY callback'),

  i18n: {
    messages: {
      ui: {
        blockTunes: {
          toggler: {
            'Click to tune': 'Нажмите, чтобы настроить',
            'or drag to move': 'или перетащите',
          },
        },
        inlineToolbar: {
          converter: {
            'Convert to': 'Конвертировать в',
          },
        },
        toolbar: {
          toolbox: {
            Add: 'Добавить',
          },
        },
      },
      toolNames: {
        Text: 'Параграф',
        Heading: 'Заголовок',
        List: 'Список',
        Warning: 'Примечание',
        Checklist: 'Чеклист',
        Quote: 'Цитата',
        Code: 'Код',
        Delimiter: 'Разделитель',
        'Raw HTML': 'HTML-фрагмент',
        Image: 'Вставить картинку',
        Table: 'Таблица',
        Link: 'Ссылка',
        Marker: 'Маркер',
        Bold: 'Полужирный',
        Italic: 'Курсив',
        InlineCode: 'Моноширинный',
        Personality: 'Вставить автора',
      },
      tools: {
        link: {
          'Add a link': 'Вставить ссылку',
        },
        stub: {
          'The block can not be displayed correctly.':
            'Блок не может быть корректно отображен',
        },
        image: {
          'Select an Image': 'Выбрать изображение',
          'Couldn’t upload image. Please try another.':
            'Не удалось загрузить изображение. Пожалуйста, попробуйте снова',
          'With border': 'Граница',
          'Stretch image': 'Растянуть',
          'With background': 'С фоном',
        },
        table: {
          'Add column to left': 'Добавить колонку слева',
          'Add column to right': 'Добавить колонку слева',
          'Delete column': 'Удалить колонку',
          'Add row above': 'Добавить ряд выше',
          'Add row below': 'Добавить ряд ниже',
          'Delete row': 'Удалить ряд',
          'With headings': 'С заголовками',
          'Without headings': 'Без заголовков',
          Heading: 'Заголовок',
        },
        linkTool: {
          Link: 'Ссылка',
          "Couldn't fetch the link data":
            'Не удалось запросить данные по ссылке',
          "Couldn't get this link data, try the other one":
            'Не удалось получить данные по ссылке. Попробуйте другую',
          'Wrong response format from the server':
            'Неправильный формат ответа сервера',
        },
      },
      blockTunes: {
        delete: {
          Delete: 'Удалить',
        },
        moveUp: {
          'Move up': 'Переместить вверх',
        },
        moveDown: {
          'Move down': 'Переместить вниз',
        },
      },
    },
  },
};
