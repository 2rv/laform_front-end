import { useCallback, useState, useEffect } from 'react';
import initialData from './data.json';

export const dataKey = 'editorData';

export const useSaveCallback = (editor) => {
  return useCallback(async () => {
    if (!editor) return;
    try {
      const output = await editor.save();
      localStorage.setItem(dataKey, JSON.stringify(output));
    } catch (e) {
      //   console.error('SAVE RESULT failed', e);
    }
  }, [editor]);
};

// Set editor data after initializing
export const useSetData = (editor, data) => {
  useEffect(() => {
    if (!editor || !data) {
      return;
    }

    editor.isReady.then(() => {
      // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
      setTimeout(() => {
        editor.render(data);
      }, 100);
    });
  }, [editor, data]);
};

export const useClearDataCallback = (editor) => {
  return useCallback(
    (ev) => {
      ev.preventDefault();
      if (!editor) {
        return;
      }
      editor.isReady.then(() => {
        // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
        setTimeout(() => {
          editor.clear();
        }, 100);
      });
    },
    [editor],
  );
};

// load saved data
export const useLoadData = (formikOnChange) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mimic async data load
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      //   console.group('LOAD DATA');
      const savedrow = localStorage.getItem(dataKey);
      const saved = JSON.parse(savedrow);
      if (saved?.blocks.length) {
        setData(saved);
        formikOnChange(saved);
      } else {
        setData(initialData);
        formikOnChange(initialData);
      }

      //   console.groupEnd();
      setLoading(false);
    }, 200);

    return () => {
      setLoading(false);
      clearTimeout(id);
    };
  }, []);

  return { data, loading };
};
