import { CreateArticleContainer } from '../../core/create-article';
import { PageWrapper } from '../../lib/common/page-wrapper';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
} from '../../core/editor';

const Editor = dynamic(
  () => import('../../core/editor/editor').then((mod) => mod.EditorContainer),
  { ssr: false },
);

export default function CreateArticlePage() {
  const [editor, setEditor] = useState(null);
  // save handler
  const onEditorSave = useSaveCallback(editor);
  // load data
  const { data, loading } = useLoadData();
  // set saved data
  useSetData(editor, data);
  // clear data callback
  const clearData = useClearDataCallback(editor);
  const disabled = editor === null || loading;

  return (
    <PageWrapper>
      <CreateArticleContainer disabled={disabled}>
        <Editor
          reInit
          editorRef={setEditor}
          options={options}
          data={data}
          read={false}
          onEditorSave={onEditorSave}
        />
      </CreateArticleContainer>
    </PageWrapper>
  );
}
