import { useState } from 'react';
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
  Editor,
} from './editor';

export function BlockEditor(props) {
  const { formikOnChange, notification } = props;
  const [editor, setEditor] = useState(null);
  const onEditorSave = useSaveCallback(editor);
  const { data, loading } = useLoadData(formikOnChange);

  useSetData(editor, data);
  const clearData = useClearDataCallback(editor);
  const disabled = editor === null || loading;

  return (
    <Editor
      notification={notification}
      reInit
      formikOnChange={formikOnChange}
      editorRef={setEditor}
      options={options}
      data={data}
      read={false}
      onEditorSave={onEditorSave}
    />
  );
}
