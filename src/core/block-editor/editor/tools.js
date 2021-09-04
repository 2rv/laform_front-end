import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import { httpRequest } from '../../main/http';

export const tools = {
  header: {
    class: Header,
    config: {
      placeholder: 'Это заголовок',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 1,
    },
    inlineToolbar: ['link', 'bold', 'italic'],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: Embed,
  table: Table,
  linkTool: LinkTool,
  marker: Marker,
  delimiter: Delimiter,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile(file) {
          const formData = new FormData();
          formData.append('file', file);
          return httpRequest({
            method: 'POST',
            url: 'file/create',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then((res) => {
            return {
              success: 1,
              file: {
                url: res.data.fileUrl,
              },
            };
          });
        },
      },
      captionPlaceholder: 'Описание',
    },
  },
};
