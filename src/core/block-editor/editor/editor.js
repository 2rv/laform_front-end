import styled from 'styled-components';
import { useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { tools, notificationToolList } from './tools';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../lib/theme';
import { dataKey } from './hooks';

export const useEditor = (toolsList, props, options = {}) => {
  const { data, editorRef, read, formikOnChange } = props;
  const [editorInstance, setEditor] = useState(null);

  const {
    data: ignoreData,
    tools: ignoreTools,
    holder: ignoreHolder,
    ...editorOptions
  } = options;

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      tools: toolsList,
      data: data || {},
      readOnly: read,
      onChange: async (e) => {
        const output = await e.saver.save();
        formikOnChange && formikOnChange(output);
        localStorage.setItem(dataKey, JSON.stringify(output));
      },
      ...editorOptions,
    });

    setEditor(editor);

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
          setEditor(null);
        })
        .catch((e) => console.error('EDITOR CLEANUP ERROR', e));
    };
  }, [toolsList]);

  useEffect(() => {
    if (!editorInstance) {
      return;
    }
    if (editorRef) {
      editorRef(editorInstance);
    }
  }, [editorInstance, editorRef]);

  return { editor: editorInstance };
};

export const EditorContainer = (props) => {
  const {
    editorRef,
    data,
    options,
    read = false,
    formikOnChange,
    notification,
  } = props;
  const editorTools = notification ? notificationToolList : tools;
  useEditor(editorTools, { data, editorRef, read, formikOnChange }, options);

  return (
    <Container>
      <div className="container" id="editor"></div>
    </Container>
  );
};

const Container = styled.div`
  padding: ${spacing(6)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  box-shadow: 0 24px 24px -18px rgb(69 104 129 / 33%),
    0 9px 45px 0 rgb(114 119 160 / 12%);
`;
