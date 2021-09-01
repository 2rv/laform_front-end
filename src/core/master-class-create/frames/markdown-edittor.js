import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(
  () => {
    return new Promise((resolve) => {
      import('react-markdown-editor-lite').then((res) => {
        const Editor = res.default;
        Editor.addLocale('ru', {
          btnHeader: 'Хедер',
          btnClear: 'Очистить',
          btnBold: 'Жирдяй',
        });
        Editor.useLocale('ru');

        resolve(Editor);
      });
    });
  },
  {
    ssr: true,
  },
);

export default function () {
  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={(text) => <ReactMarkdown>{markdown}</ReactMarkdown>}
    />
  );
}
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
