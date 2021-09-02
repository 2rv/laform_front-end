import React, { useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import { tools } from './tools';

export const useEditor = (toolsList, { data, editorRef }, options = {}) => {
  const [editorInstance, setEditor] = useState(null);
  const {
    data: ignoreData,
    tools: ignoreTools,
    holder: ignoreHolder,
    ...editorOptions
  } = options;

  // initialize
  useEffect(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: 'editor-js',

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: toolsList,

      /**
       * Previously saved data that should be rendered
       */
      data: data || {},

      initialBlock: 'paragraph',

      // Override editor options
      ...editorOptions,
    });

    setEditor(editor);

    // cleanup
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
          setEditor(null);
        })
        .catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, [toolsList]);

  // set reference
  useEffect(() => {
    if (!editorInstance) {
      return;
    }
    // Send instance to the parent
    if (editorRef) {
      editorRef(editorInstance);
    }
  }, [editorInstance, editorRef]);

  return { editor: editorInstance };
};

export const EditorContainer = ({ editorRef, data, options }) => {
  console.log(`editorRef: ${editorRef}, data: ${data}, options: ${options}`);
  useEditor(tools, { data, editorRef }, options);

  return (
    <React.Fragment>
      <div className="container" id="editor-js"></div>
    </React.Fragment>
  );
};
