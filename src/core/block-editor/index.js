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
  const { formikOnChange } = props;
  const [editor, setEditor] = useState(null);
  // save handler
  const onEditorSave = useSaveCallback(editor);
  // load data
  const { data, loading } = useLoadData(formikOnChange);

  // set saved data
  useSetData(editor, data);
  // clear data callback
  const clearData = useClearDataCallback(editor);
  const disabled = editor === null || loading;

  return (
    <Editor
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
